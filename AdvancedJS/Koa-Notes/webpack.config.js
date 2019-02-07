const path = require('path');

module.exports = {
    mode: 'development',
    //join中不能省__dirname
    entry: path.join(__dirname,'./src/js/app/toast.js'),
    output: {
        //等价于path.resolve(__dirname,'dist') dirname可以省
        path: path.resolve('dist'),
        filename: 'bundletoast.js',
        publicPath: '',
    },
    module: {
        rules: [
            {
                test: /\.sass$/,
                use: ["style-loader","css-loader","sass-loader"]
            },
            {
                test: /\.scss$/,
                use: ["style-loader","css-loader","sass-loader"]
            },
            {
                test: /\.less$/,
                use: ["style-loader","css-loader","less-loader"]
            },
            {
                test: /\.css$/,
                use: ["style-loader","css-loader"]
            },
            //字体处理
            {
                test: /\.(ttf|svg|eot|woff|woff2)/,
                use: "url-loader"
            }
        ]
    },

    /*resolve: {
        alias: {

        }
    }*/



    //省去了每个模块require引入jquery的步骤 舒服
    plugins: [

        /*new webpack.ProvidePlugin({
            $: "./node_modules/jquery/dist/jquery."
        }),*/

    ]

};