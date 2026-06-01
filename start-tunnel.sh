#!/bin/bash
# ==================================================
# GIS Homepage 启动脚本
# 1. 检查 SQL Server 是否运行
# 2. 启动 Express 后端
# 3. 启动 serveo 隧道
# ==================================================

echo "========================================="
echo "  GIS Homepage 一键启动"
echo "========================================="

# 检查 SQL Server
echo ""
echo "[1/3] 检查 SQL Server..."
sc query MSSQLSERVER | grep -q RUNNING
if [ $? -ne 0 ]; then
  echo "  ⚠️  SQL Server 未运行，尝试启动..."
  net start MSSQLSERVER 2>/dev/null
  if [ $? -ne 0 ]; then
    echo "  ❌ 请以管理员身份运行此脚本"
    exit 1
  fi
fi
echo "  ✅ SQL Server 运行中"

# 启动后端
echo ""
echo "[2/3] 启动后端..."
node server/index.js &
SERVER_PID=$!
sleep 3
echo "  ✅ 后端已启动 (PID: $SERVER_PID)"

# 启动隧道
echo ""
echo "[3/3] 启动公网隧道..."
ssh -o StrictHostKeyChecking=no -R 80:localhost:3000 serveo.net 2>&1 | while read line; do
  echo "$line"
  if echo "$line" | grep -q "Forwarding HTTP traffic from"; then
    URL=$(echo "$line" | grep -o 'https://[^ ]*')
    echo ""
    echo "========================================="
    echo "  🌐 公网地址: $URL"
    echo "  📋 管理后台: http://localhost:3000/admin"
    echo "========================================="
    echo ""
    echo "将此地址更新到 .env.production:"
    echo "  VITE_API_URL=$URL"
    echo ""
    echo "然后运行: npm run build && npm run deploy"
  fi
done

# 清理
kill $SERVER_PID 2>/dev/null
