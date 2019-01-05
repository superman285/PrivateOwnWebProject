const Sequelize = require('sequelize');

module.exports = {
    tableName: 'singerTags',
    schema: {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        type: {
            type: Sequelize.STRING(50),
            allowNull: false,
            defaultValue: ''
        },
        tagId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        name: {
            type: Sequelize.STRING(50),
            allowNull: false,
            defaultValue: ''
        }
    }
}