module.exports = {

    getweb3(){
        var Web3 = require('web3');
        // var web3 = new Web3(Web3.givenProvider || "https://rinkeby.infura.io/v3/33a947db47094090b8331ea2f6f4bbd3");

        var web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"))
        return web3;
    }

}