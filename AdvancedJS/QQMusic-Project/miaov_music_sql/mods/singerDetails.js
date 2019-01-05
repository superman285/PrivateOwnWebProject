const axios = require('axios');
const jsdom = require('jsdom');
const schema = require('../scheme/singerDetails');
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
        let singerDetail = await getDetailDataByMid( singers[i].get('mid') );

        // console.log(singerDetail);
        if (singerDetail && singerDetail.id) {
            await db.getQueryInterface().bulkInsert(
                schema.tableName,
                [{
                    singerId: singerDetail.id,
                    description: singerDetail.desc,
                    basic: JSON.stringify(singerDetail.basic),
                    other: JSON.stringify(singerDetail.other)
                }]
            );
            console.log(`导入数据 => ${i+1} / ${len}`);
        }

    }
}

async function getDetailDataByMid(singermid) {
    let rs = await axios({
        url: 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_singer_desc.fcg?utf8=1&outCharset=utf-8&format=xml&r=1545129204065&singermid=' + singermid,
        headers: {
            referer: "https://c.y.qq.com/xhr_proxy_utf8.html"
        }
    });

    let { document } = new jsdom.JSDOM(rs.data, {
        contentType: 'text/xml'
    }).window;

    let idElement = document.querySelector('id');
    let descElement = document.querySelector('desc');
    let basicItemElements = [...document.querySelectorAll('basic>item')];
    let otherItemElements = [...document.querySelectorAll('other>item')];

    return {
        id: idElement && idElement.textContent,
        desc: descElement && descElement.textContent,
        basic: basicItemElements.map(itemElement => {
            let keyElement = itemElement.querySelector('key');
            let valueElement = itemElement.querySelector('value');

            return {
                key: keyElement && keyElement.textContent,
                value: valueElement && valueElement.textContent
            }
        }),
        other: otherItemElements.map(itemElement => {
            let keyElement = itemElement.querySelector('key');
            let valueElement = itemElement.querySelector('value');

            return {
                key: keyElement && keyElement.textContent,
                value: valueElement && valueElement.textContent
            }
        })
    };
}

module.exports.run = async db => {

    console.log('\n=================== 歌手详情-开始 ===================');

    console.log(`开始：创建歌手详情表 -> ${schema.tableName}`);
    await createTable(db);
    console.log(`结束：创建歌手详情表 -> ${schema.tableName}`);

    console.log(`开始：导入歌手详情数据 -> ${schema.tableName}`);
    await importData(db);
    console.log(`结束：导入歌手详情数据 -> ${schema.tableName}`);

    console.log('=================== 歌手详情-结束 ===================\n');
};