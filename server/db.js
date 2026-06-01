const sql = require('mssql')

// ===================== 数据库配置 =====================

const dbConfig = {
  user: 'sa',
  password: '1',
  server: 'localhost',
  database: 'gis_contact',
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
}

// ===================== 连接池 =====================

let pool = null

async function getPool() {
  if (pool) return pool
  pool = await sql.connect(dbConfig)
  console.log('✅ SQL Server 连接成功')
  return pool
}

// ===================== 初始化数据库 =====================

async function initDB() {
  // 先连接到 master 创建数据库
  const masterConfig = { ...dbConfig, database: 'master' }
  const masterPool = await sql.connect(masterConfig)

  const dbResult = await masterPool
    .request()
    .query(`SELECT name FROM sys.databases WHERE name = 'gis_contact'`)

  if (dbResult.recordset.length === 0) {
    await masterPool.request().query(`CREATE DATABASE gis_contact`)
    console.log('📦 数据库 gis_contact 已创建')
  }
  masterPool.close()

  // 连接到 gis_contact 创建表
  const p = await getPool()
  await p
    .request()
    .query(`
      IF NOT EXISTS (SELECT * FROM sys.tables WHERE name = 'contacts')
      CREATE TABLE contacts (
        id INT IDENTITY(1,1) PRIMARY KEY,
        name NVARCHAR(50) NOT NULL,
        email NVARCHAR(100) NOT NULL,
        message NVARCHAR(2000) NOT NULL,
        ip NVARCHAR(50),
        created_at DATETIME DEFAULT GETDATE()
      )
    `)
  console.log('📋 表 contacts 已就绪')
}

// ===================== 导出 =====================

module.exports = { getPool, initDB, sql }
