const Sequelize = require('sequelize');
const configs = require('./config/config.json');

const createDataBaseMod = require('./mods/createDataBase');
const singerTagsMod = require('./mods/singerTags');
const singersMod = require('./mods/singers');
const singerDetailsMod = require('./mods/singerDetails');
const albumsMod = require('./mods/albums');
const songsMod = require('./mods/songs');

(async () => {
    const env = process.env.NODE_ENV || 'development';
    const config = configs[env];

    const db = new Sequelize(config.database, config.username, config.password, config);

    /**
     * 创建数据库
     */
    await createDataBaseMod.run( db, config );

    /**
     * 歌手标签
     */
    await singerTagsMod.run( db );

    /**
     * 歌手
     */
    await singersMod.run( db );

    /**
     * 歌手详情
     */
    await singerDetailsMod.run( db );

    /**
     * 歌手专辑详情
     */
    await albumsMod.run( db );

    /**
     * 歌手歌曲
     */
    await songsMod.run( db );

    db.close();
})();