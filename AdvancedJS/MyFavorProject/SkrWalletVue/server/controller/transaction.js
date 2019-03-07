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


        //返回promise 需要处理异步问题
        var nonce = await web3.eth.getTransactionCount(txFromAddr);
        console.log('noncenew',nonce);

        var amount = web3.utils.toWei(txAmount,'ether');

        //获取当前gas价格
        var gasPrice = web3.utils.toHex(await web3.eth.getGasPrice());
        //估算交易的gas消耗
        var gasLimit = await web3.eth.estimateGas({
            to: txToAddr,
            data: "0x00"
        });

        //数值项都需要转为16进制数 用web3.utils.toHex方法
        var rawTx = {
            from: txFromAddr,
            nonce: web3.utils.toHex(nonce),
            //超高值
            /*gasPrice: '0x97359400',
            gasLimit: '0x495f05',*/
            //文档推荐值，gas涨了2710不行了 要5210
            /*gasPrice: '0x09184e72a000',
            gasLimit: '0x5210',*/
            //函数计算值，更灵活
            gasPrice,
            gasLimit,
            to: txToAddr,
            value: web3.utils.toHex(amount),
            //代表无
            data: "0x00"
        }
        var tx = new Tx(rawTx);
        var bufferpk = new Buffer.from(privatekey,'hex');
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