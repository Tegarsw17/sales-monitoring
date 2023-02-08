const { Sequelize } = require('sequelize')
const db = require('./database')
const pg = require('pg')

const sequelize = new Sequelize(db.database, db.username, db.password, {
    host: db.host,
    port: db.port,
    dialect: db.dialect,
    dialectModule: pg,
    define: {
        underscored: true,
    }
})

module.exports = sequelize