const Sequelize = require('sequelize');

module.exports = {
    tableName: 'singerDetails',
    schema: {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        singerId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        description: {
            type: Sequelize.STRING(1000),
            allowNull: false,
            defaultValue: ''
        },
        basic: {
            type: Sequelize.STRING(2000),
            allowNull: false,
            defaultValue: ''
        },
        other: {
            type: Sequelize.TEXT,
            allowNull: false,
            defaultValue: ''
        }
    }
}