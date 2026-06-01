const express = require('express')
const { getPool, sql } = require('../db')

const router = express.Router()

// ===================== POST /api/contact =====================
// 用户提交联系表单
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body

    // 参数校验
    if (!name || !email || !message) {
      return res.status(400).json({ ok: false, error: '请填写完整信息' })
    }
    if (name.length > 50) {
      return res.status(400).json({ ok: false, error: '姓名过长' })
    }
    if (message.length > 2000) {
      return res.status(400).json({ ok: false, error: '留言内容过长' })
    }

    const ip = req.headers['x-forwarded-for'] || req.ip || 'unknown'
    const pool = await getPool()

    await pool
      .request()
      .input('name', sql.NVarChar, name)
      .input('email', sql.NVarChar, email)
      .input('message', sql.NVarChar, message)
      .input('ip', sql.NVarChar, ip)
      .query(
        'INSERT INTO contacts (name, email, message, ip) VALUES (@name, @email, @message, @ip)'
      )

    console.log(`📩 新留言: ${name} <${email}>`)
    res.json({ ok: true, message: '提交成功！我会尽快回复你。' })
  } catch (err) {
    console.error('❌ 提交失败:', err.message)
    res.status(500).json({ ok: false, error: '服务器错误，请稍后再试' })
  }
})

// ===================== GET /api/contact =====================
// 获取所有留言（管理后台用）
router.get('/', async (_req, res) => {
  try {
    const pool = await getPool()
    const result = await pool
      .request()
      .query('SELECT * FROM contacts ORDER BY created_at DESC')

    res.json({ ok: true, data: result.recordset })
  } catch (err) {
    console.error('❌ 查询失败:', err.message)
    res.status(500).json({ ok: false, error: '查询失败' })
  }
})

module.exports = router
