
const webpack = require('webpack');
//const axios = require("axios");

module.exports = {
    publicPath: './',

    devServer: {
        port: 3000,
    },

    //webpack配置,除了对象方式也可用函数方式
    configureWebpack: {

        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                Web3: "web3",
                axios: "axios",
            }),


        ]

    }
};