const express = require('express')
const cors = require('cors')
const path = require('path')
const { initDB } = require('./db')
const contactRoutes = require('./routes/contact')

const app = express()
const PORT = process.env.PORT || 3000

// ===================== 中间件 =====================
app.use(cors())
app.use(express.json())

// ===================== API 路由 =====================
app.use('/api/contact', contactRoutes)

// 健康检查
app.get('/api/health', (_req, res) => {
  res.json({ ok: true, time: new Date().toISOString() })
})

// ===================== 管理后台 =====================
app.get('/admin', (_req, res) => {
  res.sendFile(path.join(__dirname, 'admin', 'index.html'))
})

// ===================== 启动 =====================
async function start() {
  try {
    await initDB()
    app.listen(PORT, () => {
      console.log(`\n🚀 后端服务已启动: http://localhost:${PORT}`)
      console.log(`📋 管理后台: http://localhost:${PORT}/admin`)
      console.log(`📡 API 接口: http://localhost:${PORT}/api/contact\n`)
    })
  } catch (err) {
    console.error('❌ 启动失败:', err.message)
    process.exit(1)
  }
}

start()
