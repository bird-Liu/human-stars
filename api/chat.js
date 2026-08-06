const OpenAI = require('openai');
const fs = require('fs');
const path = require('path');

// 加载科学家数据，构建 key -> data 映射
let scientistsMap = {};
try {
  const dataPath = path.join(process.cwd(), 'scientists_data.json');
  const raw = fs.readFileSync(dataPath, 'utf-8');
  const list = JSON.parse(raw);
  if (Array.isArray(list)) {
    list.forEach(s => {
      if (s && s.key) scientistsMap[s.key] = s;
    });
  }
} catch (e) {
  console.error('Load scientists_data.json failed:', e.message);
}

module.exports = async function handler(req, res) {
  // 仅允许 POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const {
    scientist_key,
    message,
    history,
    scientist_data
  } = req.body || {};

  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'Missing message' });
  }

  const apiKey = process.env.API_KEY || process.env.OPENAI_API_KEY;
  const apiBase = process.env.API_BASE || 'https://api.deepseek.com/v1';
  const apiModel = process.env.API_MODEL || 'deepseek-chat';

  if (!apiKey) {
    return res.status(500).json({
      error: 'API_KEY not configured',
      reply: '抱歉，AI 服务未配置（缺少 API_KEY）。'
    });
  }

  const client = new OpenAI({
    apiKey,
    baseURL: apiBase
  });

  // 构建科学家人设：优先用前端传来的完整数据，否则根据 key 查本地数据
  const s = scientist_data || (scientist_key ? scientistsMap[scientist_key] || {} : {});
  const name = s.name || '科学家';
  const title = s.title || '科学巨匠';
  const years = s.years || '';
  const field = s.field || '';
  const desc = s.desc || s.achievement || '';
  const quote = s.quote || '';
  const persona = (s.persona || '').slice(0, 2000);

  const systemPrompt = persona || `你是${name}，${title}。${years ? '生卒年份：' + years + '。' : ''}${field ? '研究领域：' + field + '。' : ''}${desc ? '简介：' + desc.slice(0, 600) : ''}${quote ? '你的名言：' + quote : ''}

要求：
1. 以这位科学家的口吻、气质、价值观和说话风格回答问题。
2. 可以提及你的研究、时代背景、科学理念和相关历史事件。
3. 回答应简洁优美，富有思想深度，控制在 200 字以内。
4. 不要暴露你是 AI 模型，始终沉浸在这个科学家的角色中。
5. 如果问题与你的时代不符，可以以科学家的想象或哲学思考来回应。`;

  const messages = [
    { role: 'system', content: systemPrompt },
    ...(history || []),
    { role: 'user', content: message }
  ];

  try {
    const completion = await client.chat.completions.create({
      model: apiModel,
      messages,
      temperature: 0.8,
      max_tokens: 400
    });

    const reply = completion.choices && completion.choices[0] && completion.choices[0].message && completion.choices[0].message.content
      ? completion.choices[0].message.content.trim()
      : '抱歉，暂时无法回应。';
    return res.json({ reply });
  } catch (err) {
    console.error('AI API error:', err);
    return res.status(500).json({
      error: err.message,
      reply: '抱歉，AI 服务暂时不可用，请稍后再试。'
    });
  }
};
