#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
人类群星闪耀时 - 本地开发服务器
提供静态文件服务 + /api/chat AI 对话接口
"""

import os
import sys
import json
import http.server
import socketserver
import urllib.request
import argparse
from urllib.parse import urlparse

# 尝试加载 .env
try:
    with open('.env', 'r', encoding='utf-8') as f:
        for line in f:
            line = line.strip()
            if not line or line.startswith('#') or '=' not in line:
                continue
            key, value = line.split('=', 1)
            os.environ.setdefault(key.strip(), value.strip())
except FileNotFoundError:
    pass

API_KEY = os.environ.get('API_KEY') or os.environ.get('OPENAI_API_KEY')
API_BASE = os.environ.get('API_BASE', 'https://api.deepseek.com/v1')
API_MODEL = os.environ.get('API_MODEL', 'deepseek-chat')
DEFAULT_PORT = int(os.environ.get('PORT', '8090'))

parser = argparse.ArgumentParser(description='人类群星闪耀时 - 本地服务器')
parser.add_argument('--port', type=int, default=DEFAULT_PORT, help=f'服务器端口（默认 {DEFAULT_PORT}）')
args = parser.parse_args()
PORT = args.port

# 加载科学家数据
SCIENTISTS_MAP = {}
try:
    with open('scientists_data.json', 'r', encoding='utf-8') as f:
        scientists_list = json.load(f)
        if isinstance(scientists_list, list):
            for s in scientists_list:
                if s and s.get('key'):
                    SCIENTISTS_MAP[s['key']] = s
except Exception as e:
    print('加载 scientists_data.json 失败:', e)


class Handler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def do_GET(self):
        parsed = urlparse(self.path)
        if parsed.path == '/api/health':
            self.send_json({
                'status': 'ok',
                'api_configured': bool(API_KEY)
            })
            return
        # 默认静态文件服务
        return super().do_GET()

    def do_POST(self):
        parsed = urlparse(self.path)
        if parsed.path == '/api/chat':
            self.handle_chat()
            return
        if parsed.path == '/api/generate-scientist':
            self.handle_generate_scientist()
            return
        self.send_error(404)

    def send_json(self, data, status=200):
        body = json.dumps(data, ensure_ascii=False).encode('utf-8')
        self.send_response(status)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.send_header('Content-Length', str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def handle_chat(self):
        content_length = int(self.headers.get('Content-Length', 0))
        if content_length <= 0:
            self.send_json({'error': 'Missing body'}, 400)
            return

        try:
            body = self.rfile.read(content_length).decode('utf-8')
            data = json.loads(body)
        except Exception:
            self.send_json({'error': 'Invalid JSON'}, 400)
            return

        scientist_key = data.get('scientist_key')
        message = data.get('message', '').strip()
        history = data.get('history') or []
        scientist_data = data.get('scientist_data') or {}

        if not message:
            self.send_json({'error': 'Missing message'}, 400)
            return

        if not API_KEY:
            self.send_json({
                'error': 'API_KEY not configured',
                'reply': '抱歉，AI 服务未配置（缺少 API_KEY）。'
            }, 500)
            return

        # 构建科学家人设
        s = scientist_data or SCIENTISTS_MAP.get(scientist_key, {})
        name = s.get('name', '科学家')
        title = s.get('title', '科学巨匠')
        years = s.get('years', '')
        field = s.get('field', '')
        desc = s.get('desc') or s.get('achievement', '')
        quote = s.get('quote', '')
        persona = (s.get('persona') or '')[:2000]

        system_prompt = persona or f"""你是{name}，{title}。{years and '生卒年份：' + years + '。'}{field and '研究领域：' + field + '。'}{desc and '简介：' + desc[:600]}{quote and '你的名言：' + quote}

要求：
1. 以这位科学家的口吻、气质、价值观和说话风格回答问题。
2. 可以提及你的研究、时代背景、科学理念和相关历史事件。
3. 回答应简洁优美，富有思想深度，控制在 200 字以内。
4. 不要暴露你是 AI 模型，始终沉浸在这个科学家的角色中。
5. 如果问题与你的时代不符，可以以科学家的想象或哲学思考来回应。"""

        messages = [{'role': 'system', 'content': system_prompt}]
        messages.extend(history)
        messages.append({'role': 'user', 'content': message})

        try:
            req_data = json.dumps({
                'model': API_MODEL,
                'messages': messages,
                'temperature': 0.8,
                'max_tokens': 400
            }, ensure_ascii=False).encode('utf-8')

            req = urllib.request.Request(
                f"{API_BASE.rstrip('/')}/chat/completions",
                data=req_data,
                headers={
                    'Authorization': f'Bearer {API_KEY}',
                    'Content-Type': 'application/json; charset=utf-8'
                },
                method='POST'
            )

            with urllib.request.urlopen(req, timeout=60) as resp:
                resp_json = json.loads(resp.read().decode('utf-8'))
                choices = resp_json.get('choices', [])
                if choices and choices[0].get('message'):
                    reply = choices[0]['message'].get('content', '').strip()
                else:
                    reply = '抱歉，暂时无法回应。'
                self.send_json({'reply': reply})

        except Exception as e:
            print('AI API error:', e)
            self.send_json({
                'error': str(e),
                'reply': '抱歉，AI 服务暂时不可用，请稍后再试。'
            }, 500)

    def handle_generate_scientist(self):
        """根据姓名生成科学家完整资料（简介、名言、贡献等）"""
        content_length = int(self.headers.get('Content-Length', 0))
        if content_length <= 0:
            self.send_json({'error': 'Missing body'}, 400)
            return

        try:
            body = self.rfile.read(content_length).decode('utf-8')
            data = json.loads(body)
        except Exception:
            self.send_json({'error': 'Invalid JSON'}, 400)
            return

        name = (data.get('name') or '').strip()
        if not name:
            self.send_json({'error': 'Missing name'}, 400)
            return

        if not API_KEY:
            self.send_json({
                'error': 'API_KEY not configured',
                'reply': '抱歉，AI 服务未配置（缺少 API_KEY）。'
            }, 500)
            return

        # 生成唯一的 key（避免与已有科学家冲突）
        import hashlib
        gen_key = 'gen_' + hashlib.md5(name.encode('utf-8')).hexdigest()[:10]

        # 学科候选列表（与 scientists_meta.js 保持一致）
        categories = ['物理学', '天文学', '数学', '生命科学', '化学', '工程学', '计算机科学', '地球科学', '其他']

        system_prompt = (
            "你是一位科学史专家。用户会给你一个科学家姓名，请生成该科学家的结构化资料。"
            "如果该姓名确实是某位真实存在的科学家，请基于史实生成准确资料；"
            "如果无法确认或可能是虚构人物，请诚实地以「未能找到该科学家的可靠记载」为由拒绝生成。"
            "所有字段必须为中文（英文姓名除外），言简意赅，符合历史事实。"
        )

        user_prompt = (
            f"请为科学家「{name}」生成资料，严格输出以下 JSON 格式（不要任何额外文字、不要 markdown 代码块）：\n"
            "{\n"
            f'  "name": "{name}",\n'
            '  "nameEn": "英文全名大写",\n'
            '  "title": "一句话头衔（如：相对论创立者）",\n'
            '  "years": "出生年份 — 卒年份 · 国家代码（如：1879 — 1955 · GERMANY，在世则留空卒年）",\n'
            '  "fallback": "姓名首字",\n'
            '  "category": "学科分类（从以下选一：' + '、'.join(categories) + '）",\n'
            '  "quote": "一句该科学家的著名格言或代表性言论",\n'
            '  "desc": "200-400字的生平简介，涵盖出生、教育、主要经历、关键事件",\n'
            '  "contrib": "200-400字的主要科学贡献阐述"\n'
            "}\n"
            "如果该姓名并非真实科学家，请返回：{\"error\": \"未能找到该科学家的可靠记载，请确认姓名拼写。\"}"
        )

        messages = [
            {'role': 'system', 'content': system_prompt},
            {'role': 'user', 'content': user_prompt}
        ]

        try:
            req_data = json.dumps({
                'model': API_MODEL,
                'messages': messages,
                'temperature': 0.7,
                'max_tokens': 1200,
                'response_format': {'type': 'json_object'}
            }, ensure_ascii=False).encode('utf-8')

            req = urllib.request.Request(
                f"{API_BASE.rstrip('/')}/chat/completions",
                data=req_data,
                headers={
                    'Authorization': f'Bearer {API_KEY}',
                    'Content-Type': 'application/json; charset=utf-8'
                },
                method='POST'
            )

            with urllib.request.urlopen(req, timeout=60) as resp:
                resp_json = json.loads(resp.read().decode('utf-8'))
                choices = resp_json.get('choices', [])
                if not choices or not choices[0].get('message'):
                    self.send_json({'error': 'AI 返回为空'}, 500)
                    return
                content = choices[0]['message'].get('content', '').strip()

            # 解析 JSON（兼容可能的 markdown 代码块包裹）
            # 去除首尾可能的 ```json ... ``` 包裹
            if content.startswith('```'):
                lines = content.split('\n')
                # 去除首行 ``` 或 ```json
                lines = lines[1:]
                # 去除末尾 ```
                if lines and lines[-1].strip() == '```':
                    lines = lines[:-1]
                content = '\n'.join(lines).strip()

            try:
                scientist = json.loads(content)
            except json.JSONDecodeError:
                # 尝试提取第一个 JSON 对象
                start = content.find('{')
                end = content.rfind('}')
                if start >= 0 and end > start:
                    scientist = json.loads(content[start:end+1])
                else:
                    raise

            # 如果 AI 返回了 error 字段，传递给前端
            if scientist.get('error'):
                self.send_json({'error': scientist['error']}, 200)
                return

            # 补全关键字段
            scientist['key'] = gen_key
            scientist.setdefault('name', name)
            scientist.setdefault('nameEn', name.upper())
            scientist.setdefault('title', '科学家')
            scientist.setdefault('years', '')
            scientist.setdefault('fallback', name[0] if name else '?')
            scientist.setdefault('color', '#ffffff')
            scientist.setdefault('category', '其他')
            scientist.setdefault('quote', '')
            scientist.setdefault('desc', '')
            scientist.setdefault('contrib', '')
            # 星空坐标（随机但稳定，基于 key 哈希）
            h = int(hashlib.md5(gen_key.encode('utf-8')).hexdigest(), 16)
            scientist['x'] = (h % 1000) / 1000.0
            scientist['y'] = ((h >> 10) % 1000) / 1000.0
            scientist['radius'] = 3.0 + ((h >> 20) % 100) / 100.0
            scientist['brightness'] = 0.8
            scientist['twinkleSpeed'] = 0.02
            scientist['phase'] = ((h >> 30) % 1000) / 100.0
            scientist['hasDetail'] = False
            scientist['papersUrl'] = []

            self.send_json({'scientist': scientist})

        except urllib.error.HTTPError as e:
            err_body = ''
            try:
                err_body = e.read().decode('utf-8', errors='ignore')
            except Exception:
                pass
            print('Generate API HTTP error:', e.code, err_body[:300])
            self.send_json({
                'error': f'AI 服务返回错误 ({e.code})',
            }, 500)
        except Exception as e:
            print('Generate API error:', e)
            self.send_json({
                'error': '生成失败：' + str(e),
            }, 500)


if __name__ == '__main__':
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f'服务器启动：http://localhost:{PORT}', flush=True)
        print(f'API 配置状态：{"已配置" if API_KEY else "未配置"}', flush=True)
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print('\n服务器已停止')
            sys.exit(0)
