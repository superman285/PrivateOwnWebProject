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


    unlockWithPrivatekey: async ctx => {

        let privatekey = ctx.request.body.privatekey;
        //这个其实是创建账户 用create方法创建的 是否其实可以不用解锁 而用personal.newAccount创建的才需要解锁
        let res = web3.eth.accounts.privateKeyToAccount(privatekey);

        ctx.body = {
            code: 0,
            message: '私钥解锁success',
            data: {
                privatekey,
                user:123,
                res
            }
        }
    },

    unlockWithKeystore(){


        ctx.body = 'keystore解锁'
    },

    getBalance: ctx=>{

        let addr = ctx.request.body.address;
        //let addr = ctx.request.body.account.address;

        //要不要加await
        let balance = getAccountBalance(addr);

        console.log('看谁先打印',bal);
        

        ctx.body = {
            code:0,
            message: "getBalance success",
            data: {
                balance
            }
        }

    }


}