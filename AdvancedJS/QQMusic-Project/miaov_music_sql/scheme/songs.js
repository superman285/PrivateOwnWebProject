const Sequelize = require('sequelize');

module.exports = {
    tableName: 'songs',
    schema: {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        mid: {
            type: Sequelize.CHAR(14),
            allowNull: false,
            defaultValue: ''
        },
        name: {
            type: Sequelize.STRING(100),
            allowNull: false,
            defaultValue: ''
        },
        albumid: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        singerId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        interval: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        type: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0
        }
    }
}