const Sequelize = require('sequelize');

module.exports = {
    tableName: 'albums',
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
        mid: {
            type: Sequelize.CHAR(14),
            allowNull: false,
            defaultValue: ''
        },
        name: {
            type: Sequelize.STRING(50),
            allowNull: false,
            defaultValue: ''
        },
        type: {
            type: Sequelize.STRING(50),
            allowNull: false,
            defaultValue: ''
        },
        description: {
            type: Sequelize.STRING(1000),
            allowNull: false,
            defaultValue: ''
        },
        ftype: {
            type: Sequelize.STRING(50),
            allowNull: false,
            defaultValue: ''
        },
        lan: {
            type: Sequelize.STRING(50),
            allowNull: false,
            defaultValue: ''
        },
        pubTime: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: new Date()
        }
    }
}