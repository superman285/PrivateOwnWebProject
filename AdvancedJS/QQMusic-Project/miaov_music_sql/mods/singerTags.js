const axios = require('axios');
const schema = require('../scheme/singerTags');

async function createTable(db) {
    await db.getQueryInterface().dropTable(schema.tableName);
    await db.getQueryInterface().createTable(
        schema.tableName,
        schema.schema
    );
}

async function importData(db) {
    let params = {
        "comm": {
            "ct": 24,
            "cv": 10000
        },
        "singerList": {
            "module": "Music.SingerListServer",
            "method": "get_singer_list",
            "param": {
                "area": -100,
                "sex": -100,
                "genre": -100,
                "index": -100,
                "sin": 0,
                "cur_page": 1
            }
        }
    }

    let url = 'https://u.y.qq.com/cgi-bin/musicu.fcg?data=' + encodeURIComponent(JSON.stringify(params));

    let res = await axios.get(url);
    let tags = res.data.singerList.data.tags;
    let datas = [];
    for (let type in tags) {

        tags[type].map(item => {
            datas.push({
                type,
                tagId: item.id,
                name: item.name
            });
        });
        
    }
    // console.log(datas);

    await db.getQueryInterface().bulkInsert(
        schema.tableName,
        datas
    );
    console.log(`导入数据 => ${datas.length} 条`);
}

module.exports.run = async db => {

    console.log('\n=================== 歌手标签-开始 ===================');

    console.log(`开始：创建歌手标签表 -> ${schema.tableName}`);
    await createTable( db );
    console.log(`结束：创建歌手标签表 -> ${schema.tableName}`);

    console.log(`开始：导入歌手标签数据 -> ${schema.tableName}`);
    await importData( db );
    console.log(`结束：导入歌手标签数据 -> ${schema.tableName}`);

    console.log('=================== 歌手标签-结束 ===================\n');
};