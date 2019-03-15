const path = require('path');
const webpack = require('webpack');
//const Web3 = require('web3');

//优化
const TerserPlugin = require('terser-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionPlugin = require("compression-webpack-plugin");


module.exports = {
    mode: 'production',
    //join中不能省__dirname
    //entry: path.join(__dirname, './src/js/app/index.js'),
    entry: {
        bundle: path.join(__dirname, './src/js/app/index.js'),
        checkKey: path.join(__dirname, './src/js/utils/checkKey.js'),
        loginVerify: path.join(__dirname, './src/js/utils/loginVerify.js'),
        web3mod: path.join(__dirname,'./src/js/mod/web3.js'),
    },
    output: {
        //等价于path.resolve(__dirname,'dist') dirname可以省
        path: path.resolve('dist'),
        filename: '[name].js',
        publicPath: '',
    },

    devtool: false, // 指定加source-map的方式
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
            /*{
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-object-rest-spread']
                    }
                }
            }*/
        ]
    },


    //省去了每个模块require引入jquery的步骤 舒服
    plugins: [

        new webpack.ProvidePlugin({
            $: "jquery",
            Web3: "web3",
        }),
        new CompressionPlugin(),
        //new BundleAnalyzerPlugin(), 上线前不用可注释掉


    ]

};