
import {ethers} from "ethers";
import bip39 from "bip39";

console.log('^^^^^^^^^^^^^^^我要炸出bip39^^^^^^^^^^^^^^^^^',bip39);

function mnemonicToKey(mnemonic){

    return ethers.Wallet.fromMnemonic(mnemonic).privateKey;

}

function verify(keyAddr,accountAddr) {

    if (isMnemonic(keyAddr)) {
        keyAddr = mnemonicToKey(keyAddr);
        console.log('助记词转换为私钥',keyAddr);
    }

    if(ethers.utils.computeAddress(keyAddr) == accountAddr){
        console.log('校验通过');
        return true;
    }else {
        console.log("校验失败，请检查账户地址或私钥");
        return false;
    }
}

function isMnemonic(str) {
    console.log('是不是助记词呢啊？');
    return bip39.validateMnemonic(str);
}

function isKey(str) {
    console.log(ethers.utils.isHexString(str));
    console.log(str.length);
    return (ethers.utils.isHexString(str)&&str.length==66);
}

export {mnemonicToKey,verify,isMnemonic,isKey};




