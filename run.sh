#!/bin/bash
# 人类群星闪耀时 - 启动脚本
set -e

cd "$(dirname "$0")"

# 加载 .env
if [ -f .env ]; then
  set -a
  source .env
  set +a
fi

PORT=${PORT:-8090}

echo "启动科学家 AI 对话服务器..."
echo "端口: $PORT"
python3 server.py --port "$PORT"
