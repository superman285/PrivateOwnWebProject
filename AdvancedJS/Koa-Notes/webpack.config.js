const path = require('path');
const webpack = require('webpack');

//优化
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
    //mode: 'development',
    mode: 'production',
    devtool: false,
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
    devServer: {
        compress: true
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    output: {
                        beautify: false, //不需要格式化
                        comments: false //不保留注释
                    },
                    compress: {
                        warnings: false,    //删除没用到代码时不警告
                        drop_debugger: true, //去掉debug信息
                        drop_console: true  //去掉控制台信息
                    },
                }
            })
        ],
    },

    //省去了每个模块require引入jquery的步骤 舒服
    plugins: [

        new webpack.ProvidePlugin({
            $: "jquery"
        }),
        new CompressionPlugin(),

    ]

};