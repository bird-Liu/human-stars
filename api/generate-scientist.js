const OpenAI = require('openai');
const crypto = require('crypto');

module.exports = async function handler(req, res) {
  // 仅允许 POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name: rawName } = req.body || {};
  const name = (rawName || '').trim();

  if (!name) {
    return res.status(400).json({ error: 'Missing name' });
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

  const client = new OpenAI({ apiKey, baseURL: apiBase });

  // 生成唯一的 key（避免与已有科学家冲突）
  const genKey = 'gen_' + crypto.createHash('md5').update(name, 'utf8').digest('hex').slice(0, 10);

  // 学科候选列表（与 scientists_meta.js 保持一致）
  const categories = ['物理学', '天文学', '数学', '生命科学', '化学', '工程学', '计算机科学', '地球科学', '其他'];

  const systemPrompt = (
    '你是一位科学史专家。用户会给你一个科学家姓名，请生成该科学家的结构化资料。' +
    '如果该姓名确实是某位真实存在的科学家，请基于史实生成准确资料；' +
    '如果无法确认或可能是虚构人物，请诚实地以「未能找到该科学家的可靠记载」为由拒绝生成。' +
    '所有字段必须为中文（英文姓名除外），言简意赅，符合历史事实。'
  );

  const userPrompt = (
    `请为科学家「${name}」生成资料，严格输出以下 JSON 格式（不要任何额外文字、不要 markdown 代码块）：\n` +
    '{\n' +
    `  "name": "${name}",\n` +
    '  "nameEn": "英文全名大写",\n' +
    '  "title": "一句话头衔（如：相对论创立者）",\n' +
    '  "years": "出生年份 — 卒年份 · 国家代码（如：1879 — 1955 · GERMANY，在世则留空卒年）",\n' +
    '  "fallback": "姓名首字",\n' +
    '  "category": "学科分类（从以下选一：' + categories.join('、') + '）",\n' +
    '  "quote": "一句该科学家的著名格言或代表性言论",\n' +
    '  "desc": "200-400字的生平简介，涵盖出生、教育、主要经历、关键事件",\n' +
    '  "contrib": "200-400字的主要科学贡献阐述"\n' +
    "}\n" +
    '如果该姓名并非真实科学家，请返回：{"error": "未能找到该科学家的可靠记载，请确认姓名拼写。"}'
  );

  const messages = [
    { role: 'system', content: systemPrompt },
    { role: 'user', content: userPrompt }
  ];

  try {
    const completion = await client.chat.completions.create({
      model: apiModel,
      messages,
      temperature: 0.7,
      max_tokens: 1200,
      response_format: { type: 'json_object' }
    });

    let content = (completion.choices &&
      completion.choices[0] &&
      completion.choices[0].message &&
      completion.choices[0].message.content
    ) ? completion.choices[0].message.content.trim() : '';

    if (!content) {
      return res.status(500).json({ error: 'AI 返回为空' });
    }

    // 兼容可能的 markdown 代码块包裹
    if (content.startsWith('```')) {
      let lines = content.split('\n');
      lines = lines.slice(1); // 去除首行 ``` 或 ```json
      if (lines.length && lines[lines.length - 1].trim() === '```') {
        lines = lines.slice(0, -1); // 去除末尾 ```
      }
      content = lines.join('\n').trim();
    }

    let scientist;
    try {
      scientist = JSON.parse(content);
    } catch (e) {
      // 尝试提取第一个 JSON 对象
      const start = content.indexOf('{');
      const end = content.lastIndexOf('}');
      if (start >= 0 && end > start) {
        scientist = JSON.parse(content.slice(start, end + 1));
      } else {
        throw e;
      }
    }

    // 如果 AI 返回了 error 字段，传递给前端
    if (scientist.error) {
      return res.json({ error: scientist.error });
    }

    // 补全关键字段
    scientist.key = genKey;
    scientist.name = scientist.name || name;
    scientist.nameEn = scientist.nameEn || name.toUpperCase();
    scientist.title = scientist.title || '科学家';
    scientist.years = scientist.years || '';
    scientist.fallback = scientist.fallback || (name[0] || '?');
    scientist.color = scientist.color || '#ffffff';
    scientist.category = scientist.category || '其他';
    scientist.quote = scientist.quote || '';
    scientist.desc = scientist.desc || '';
    scientist.contrib = scientist.contrib || '';

    // 星空坐标（基于 key 哈希，稳定且唯一）
    const h = parseInt(crypto.createHash('md5').update(genKey, 'utf8').digest('hex'), 16);
    scientist.x = (h % 1000) / 1000.0;
    scientist.y = ((h >>> 10) % 1000) / 1000.0;
    scientist.radius = 3.0 + ((h >>> 20) % 100) / 100.0;
    scientist.brightness = 0.8;
    scientist.twinkleSpeed = 0.02;
    scientist.phase = ((h >>> 30) % 1000) / 100.0;
    scientist.hasDetail = false;
    scientist.papersUrl = [];

    return res.json({ scientist });
  } catch (err) {
    console.error('Generate scientist error:', err);
    return res.status(500).json({
      error: '生成失败：' + (err.message || '未知错误')
    });
  }
};
