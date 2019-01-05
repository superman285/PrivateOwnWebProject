const axios = require('axios');
const schema = require('../scheme/albums');
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
        let datas = await getAlbumsDataByMid( singers[i].get('mid') );

        try {
            await db.getQueryInterface().bulkInsert(
                schema.tableName,
                datas
            );
            console.log(`导入数据 => ${i+1} / ${len}`);
        } catch (error) {}
    }
    
}

async function getAlbumsDataByMid(singermid) {
    let params = { "singerAlbum": { "method": "get_singer_album", "param": { "singermid": singermid, "order": "time", "begin": 0, "num": 30, "exstatus": 1 }, "module": "music.web_singer_info_svr" } }

    let url = 'https://u.y.qq.com/cgi-bin/musicu.fcg?data=' + encodeURIComponent(JSON.stringify(params));

    let res = await axios.get(url);
    let albums = res.data.singerAlbum.data.list;
    return albums.map(album => {
        return {
            id: album.albumid,
            singerId: album.singer_id,
            mid: album.album_mid,
            name: album.album_name,
            type: album.albumtype,
            description: album.desc,
            ftype: album.ftype,
            lan: album.lan,
            pubTime: album.pub_time
        }
    });
}

module.exports.run = async db => {

    console.log('\n=================== 专辑-开始 ===================');

    console.log(`开始：创建专辑表 -> ${schema.tableName}`);
    await createTable(db);
    console.log(`结束：创建专辑表 -> ${schema.tableName}`);

    console.log(`开始：导入专辑数据 -> ${schema.tableName}`);
    await importData(db);
    console.log(`结束：导入专辑数据 -> ${schema.tableName}`);

    console.log('=================== 专辑-结束 ===================\n');
};