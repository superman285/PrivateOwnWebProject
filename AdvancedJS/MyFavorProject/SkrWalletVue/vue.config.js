const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
//const ExtractTextPlugin = require("extract-text-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");


module.exports = {
    publicPath: './',
    devServer: {
        port: 3000,
        compress: true // 服务器返回浏览器的时候是否启动gzip压缩
    },

    productionSourceMap: false,
    css: {
        extract: true, // 是否使用css分离插件 ExtractTextPlugin
        sourceMap: false, // 开启 CSS source maps?
        loaderOptions: {
            css: {}, // 这里的选项会传递给 css-loader
            postcss: {} // 这里的选项会传递给 postcss-loader
        }, // css预设器配置项 详见https://cli.vuejs.org/zh/config/#css-loaderoptions
        modules: false // 启用 CSS modules for all css / pre-processor files.
    },

    //webpack配置,除了对象方式也可用函数方式
    /*npm run serve时会把process.env.NODE_ENV设置为‘development’；
      npm run build 时会把process.env.NODE_ENV设置为‘production’；*/

    configureWebpack: {
        /*if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
            config.mode = 'production'
            }else {
            // 为开发环境修改配置...
            config.mode = 'development'
        }*/

        mode: 'production', //config.mode = "production"
        externals: {
            Vue: "Vue",
            Vuex: "Vuex",
            VueRouter: "VueRouter",
            Vuetify: "Vuetify",
        },
        optimization: {
            minimize: true,
            minimizer: [
                new TerserPlugin({
                    terserOptions: {
                        compress: {
                            warnings: false,
                            drop_debugger: true,
                            drop_console: true
                        },
                    }
                })
            ],
        },
        //不支持es6语法，报错，废弃
            /*minimizer: [
                new UglifyPlugin({
                    uglifyOptions: {
                        compress: false
                    }
                })
            ],*/
            /*runtimeChunk: 'single',
            splitChunks: {
                chunks: 'all',
                maxInitialRequests: Infinity,
                minSize: 20000,
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name(module) {
                            // get the name. E.g. node_modules/packageName/not/this/part.js
                            // or node_modules/packageName
                            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
                            // npm package names are URL-safe, but some servers don't like @ symbols
                            return `npm.${packageName.replace('@', '')}`
                        }
                    }
                }
            }*/

        module: {
            rules:[
                {
                    /*test: /\.js$/,
                    use:[{
                        loader: 'babel-loader',
                        exclude: /node_modules/,
                    }],*/
                }
            ]
        },
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                Web3: "web3",
                axios: "axios",
            }),

            new CompressionPlugin(),


            new CleanWebpackPlugin({
                dry: false //false即先删除dist目录再打包
            }),//实例化，参数为目录

            //new BundleAnalyzerPlugin(),

            /*new webpack.DefinePlugin({
                'process.env': {
                    //注意一个单引号一个双引号…… 这里是要将 "production" 替换到文件里面
                    NODE_ENV: '"production"'
                }
            }),*/

            // new ExtractTextPlugin("bundle.css"),

            /*new webpack.optimize.UglifyJsPlugin({
                comments: false,        //去掉注释
                compress: {
                    warnings: false    //忽略警告,要不然会有一大堆的黄色字体出现……
                }
            })*/

        ]

    }
};