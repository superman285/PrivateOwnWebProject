const axios = require('axios');
const schema = require('../scheme/songs');
const singersSchema = require('../scheme/singers');

async function createTable(db) {

    await db.getQueryInterface().dropTable(schema.tableName);
    await db.getQueryInterface().createTable(
        schema.tableName,
        schema.schema
    );
}

async function importData(db) {
    
    let singersModel = db.define(singersSchema.tableName, singersSchema.schema, {
        timestamps: false
    });

    let singers = await singersModel.findAll();

    let len = singers.length;
    for (let i=0; i<len; i++) {
        let datas = await getSongsDataByMid( singers[i].get('mid') );

        try {
            await db.getQueryInterface().bulkInsert(
                schema.tableName,
                datas
            );
            console.log(`导入数据 => ${i+1} / ${len}`);
        } catch (error) {}
    }
    
}

async function getSongsDataByMid(singermid, data = [], begin = 0, num = 30) {
    let rs = await axios({
        url: `https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg?singermid=${singermid}&begin=${begin}&num=30`
    });

    if (!rs.data.code) {

        if (rs.data.data.list.length > 0) {
            begin += num;
            data = [...data, ...(rs.data.data.list.map(item => {
                let musicData = item.musicData;
                return {
                    id: musicData.songid,
                    mid: musicData.songmid,
                    name: musicData.songname,
                    albumid: musicData.albumid,
                    singerId: musicData.singer[0].id,
                    interval: musicData.interval,
                    type: musicData.type
                }
            }))];
            getSongsDataByMid(singermid, data, begin, num);
        }
    }
    return data;
}

module.exports.run = async db => {

    console.log('\n=================== 歌曲-开始 ===================');

    console.log(`开始：创建歌曲表 -> ${schema.tableName}`);
    await createTable(db);
    console.log(`结束：创建歌曲表 -> ${schema.tableName}`);

    console.log(`开始：导入歌曲数据 -> ${schema.tableName}`);
    await importData(db);
    console.log(`结束：导入歌曲数据 -> ${schema.tableName}`);

    console.log('=================== 歌曲-结束 ===================\n');
};