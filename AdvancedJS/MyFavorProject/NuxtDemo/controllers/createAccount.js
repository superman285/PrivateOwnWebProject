
let Web3 = require('web3');
let fs = require('fs');
let path = require('path');

var utils = require('../utils/myUtils');
var web3 = utils.getweb3();

module.exports = {


    createAccountPage: async ctx=>{

    },

    createAccount: ctx => {
        console.log('newAccount');
        console.log('ctx.request.body',ctx.request.body.password);

        let str = String(ctx.request.body.password)

        //create方法的参数并不是密码
        let account = web3.eth.accounts.create(str);

        //or 这个方法才是真的密码
        //let account = web3.eth.personal.newAccount(password)
        console.log(account);

        //根据账号和密码生成keystore
        let keystore = account.encrypt(str);
        console.log(keystore);

        //将keystore保存到文件
        let keystoreStr = JSON.stringify(keystore);

        let time = new Date().toISOString();

        let fileName = `UTC--${time}--${account.address}`;
        console.log(fileName);
        let filePath = path.join(__dirname,"../static/keystore",fileName);
        fs.writeFileSync(filePath,keystoreStr);
        console.log(filePath);

        ctx.response.body = {
            res:"我已收到密码",
            data: account
        }

        return {
            result: ctx.response.body,
        }

    }

};
