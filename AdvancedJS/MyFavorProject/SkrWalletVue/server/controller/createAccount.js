
let Web3 = require('web3');
let fs = require('fs');
let path = require('path');

var utils = require('../../utils/myUtils');
var web3 = utils.getweb3();
var axios = require("axios");

module.exports = {

    createAccountByPrivatekey: ctx=>{
        let privatekeyStr = ctx.request.body.privatekey;
        let account = web3.eth.accounts.privateKeyToAccount(privatekeyStr);
        console.log('pk创建account', account);

        ctx.response.body = {
            code: 0,
            message:"privatekey创建账户成功",
            info: {
                createWay: "privatekey",
                account,
            }
        }


    },

    createAccountByKeystore: ctx => {
        console.log('ctx.request.body',ctx.request.body);

        var pwdstr = String(ctx.request.body.password);
        //create方法的参数并不是密码,而是用于增加混乱度的熵,不过也可以与后面的密码用同一个
        let account = web3.eth.accounts.create(pwdstr);

        //or 这个方法才是真的密码
        //let account = web3.eth.personal.newAccount(password)
        console.log(account);

        //生成keystore才真正需要密码
        //根据账户和密码生成keystore; account是一个对象 下面有encrypt加密方法
        let keystore = account.encrypt(pwdstr);
        //or web3.eth.accounts.encrypt(privatekey,pwdstr)
        console.log(keystore);

        //web3.eth.accounts.decrypt(keystore,pwdstr)

        //将keystore保存到文件
        let keystoreStr = JSON.stringify(keystore);

        let time = new Date().toISOString();

        let fileName = `UTC--${time}--${account.address}`;
        console.log(fileName);
        //注意此处，需要配合 后端koa-static的静态目录一起看 防止出错 为了给打包目录让路 所以防在dist
        //或者改koa-static 然后项目访问dist keystore访问public
        let filePath = path.join(__dirname,"../../dist/keystore",fileName);
        fs.writeFileSync(filePath,keystoreStr);
        console.log(filePath);

        ctx.response.body = {
            code: 0,
            message:"keystore创建账户成功",
            info: {
                createWay: "keystore",
                account,
                keystore:keystoreStr,
                fileName
            }
        }

    }

};
