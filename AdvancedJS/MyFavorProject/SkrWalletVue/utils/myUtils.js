module.exports = {

    getweb3(){
        var Web3 = require('web3');
        // var web3 = new Web3(Web3.givenProvider || "https://rinkeby.infura.io/v3/33a947db47094090b8331ea2f6f4bbd3");
        //var web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));
        var web3 = new Web3("https://rinkeby.infura.io/v3/33a947db47094090b8331ea2f6f4bbd3");
        return web3;
    },

    /*getTruffleweb3(){

        var Web3 = require('web3');


        var HDWalletProvider = require("truffle-hdwallet-provider");

        var mnemonic = "gadget strike phrase coil cupboard stone whip popular cradle never aisle romance";

        //var provider = new HDWalletProvider(mnemonic,"http://127.0.0.1:7545");
        var provider = new HDWalletProvider(mnemonic,"https://rinkeby.infura.io/v3/33a947db47094090b8331ea2f6f4bbd3");

        //var web3 = new Web3();
        //web3.setProvider(provider);

        var web3 = new Web3(provider);

        return {
            web3,
            provider
        }

    }*/

}