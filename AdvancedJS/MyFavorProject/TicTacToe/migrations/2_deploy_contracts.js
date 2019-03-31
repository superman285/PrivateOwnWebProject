const TicTacToe = artifacts.require("TicTacToe.sol");

module.exports = function (deployer) {

    //第二个参数为一些配置，gas|from|value|gasPrice等
    deployer.deploy(TicTacToe, {value: web3.utils.toWei("0.1", "ether")});
};
