/**
 * 创建数据库
 */
const mysql2 = require('mysql2/promise');

module.exports.run = async (db, config) => {

    const db2 = await mysql2.createConnection({
        user: config.username,
        password: config.password
    });

    let dropDbSql = `DROP DATABASE IF EXISTS ${config.database}`;
    let createDbSql = `CREATE DATABASE ${config.database} default charset utf8mb4 COLLATE utf8mb4_bin`;

    await db2.query(dropDbSql);
    await db2.query(createDbSql);

    db2.destroy();
}