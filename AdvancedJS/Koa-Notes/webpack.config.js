const path = require('path');
const webpack = require('webpack');
/*const fs = require('fs');
const net = require('net');
const tls = require('tls');
const cardinal = require('cardinal');*/

module.exports = {
    //mode: 'development',
    mode: 'production',
    devTool: false,
    //join中不能省__dirname
    entry: path.join(__dirname, './src/js/app/index.js'),
    output: {
        //等价于path.resolve(__dirname,'dist') dirname可以省
        path: path.resolve('dist'),
        filename: 'bundle.js',
        publicPath: '',
    },
    module: {
        rules: [
            {
                test: /\.sass$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            //字体处理
            {
                test: /\.(ttf|svg|eot|woff|woff2)/,
                use: "url-loader"
            },
            //babel配置
            /*{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }*/
        ]
    },



    //省去了每个模块require引入jquery的步骤 舒服
    plugins: [

        new webpack.ProvidePlugin({
            $: "jquery"
        }),

    ]

};