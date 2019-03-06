let Web3 = require('web3');
let fs = require('fs');
let path = require('path');
let Tx = require("ethereumjs-tx");

var utils = require('../../utils/myUtils');
//var {web3,provider} = utils.getTruffleweb3();

var web3 = utils.getweb3();

module.exports = {

    sendTransaction: async ctx=>{

        let {privatekey,txAmount,txToAddr,txFromAddr} = ctx.request.body;

        /*web3.eth.sendTransaction({
            from: txFromAddr,
            to: txToAddr,
            value: txAmount
        }).then(res=>{
            console.log('这是啥参数',res);
        });*/

        // console.log('nonceold多少',web3.eth.getTransactionCount(txFromAddr));

        var nonce = await web3.eth.getTransactionCount(txFromAddr);
        console.log('noncenew多少',nonce);
        //数值项都需要转为16进制数 用web3.utils.toHex方法
        var rawTx = {
            from: txFromAddr,
            nonce: web3.utils.toHex(nonce),
            gasPrice: '0x97359400',
            gasLimit: '0x495f05',
            to: txToAddr,
            value: web3.utils.toHex(10000000000000000),
        }
        var tx = new Tx(rawTx);
        var bufferpk = new Buffer(privatekey,'hex');
        tx.sign(bufferpk);
        var serializedTx = tx.serialize();
        await web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'), (err, hash)=> {
            console.log('aaaaaaaafewa',hash);
        })


        ctx.body = {
            code: 0,
            msg: "sendTx success",
            // res: sendtxRes
        }

    }


}