let Web3 = require('web3');
let fs = require('fs');
let path = require('path');

var utils = require('../../utils/myUtils');
var web3 = utils.getweb3();

async function getAccountBalance(addr) {
    let balance = await web3.eth.getBalance(addr);
    return balance;
}


//用密码创建账户的方法
//web3.eth.personal.newAccount(password)

//真正的解锁方法 但是只用于personal创建的 而且密码只用于解锁没别的用 会直接生成keystore文件 项目中生成不知道放哪儿
//web3.eth.personal.unlockAccount(address, password, unlockDuraction)

//获取所有账户
//web3.eth.personal.getAccounts()


module.exports = {


    unlockWithPrivatekey: ctx => {
        //console.log("afa4q4211^^&%^#&&*#*", ctx.request.body.data);
        let privatekey = ctx.request.body.privatekey;
        //这个其实是创建账户 用create方法创建的 是否其实可以不用解锁 而用personal.newAccount创建的才需要解锁

        try {
            let res = web3.eth.accounts.privateKeyToAccount(privatekey);
            console.log('pkToAcc', res);
            ctx.body = {
                code: 0,
                message: '私钥解锁success',
                data: {
                    res
                }
            }

        } catch (err) {
            console.log(err);
            ctx.body = {
                code: 100,
                message: '私钥解锁failed',
                data: {
                    res:false
                }
            }
        }


    },

    unlockWithKeystore: ctx => {
        //web3.eth.accounts.decrypt(keystore,pwdstr)

        let {keystore,password} = ctx.request.body;
        console.log('{keystore,password',keystore,password);



        try {
            let account = web3.eth.accounts.decrypt(keystore,password);
            console.log(account);
            ctx.body = {
                code: 0,
                message: "keystore解锁success",
                data: {
                    res:account
                }
            }
        } catch (err) {
            console.log(err);
            ctx.body = {
                code: 200,
                message: "keystore解锁failed",
                data: {
                    res: false
                }
            }
        }

    },

    getBalance: async ctx => {

        let addr = ctx.query.address;
        //let addr = ctx.request.body.account.address;
        console.log(addr);

        //要不要加await
        let balance = await web3.eth.getBalance(addr);

        console.log('看谁先打印', balance);


        ctx.body = {
            code: 0,
            message: "getBalance success",
            data: {
                balance
            }
        }

    }


}