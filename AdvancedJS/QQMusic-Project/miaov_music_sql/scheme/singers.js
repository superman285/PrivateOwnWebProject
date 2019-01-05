const Sequelize = require('sequelize');

module.exports = {
    tableName: 'singers',
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
            type: Sequelize.STRING(50),
            allowNull: false,
            defaultValue: ''
        },
        country: {
            type: Sequelize.STRING(20),
            allowNull: false,
            defaultValue: ''
        }
    }
}