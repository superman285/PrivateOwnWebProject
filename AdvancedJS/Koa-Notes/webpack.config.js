const path = require('path');

module.exports = {
    mode: 'development',
    //join中不能省__dirname
    entry: path.join(__dirname,'./src/js/app/index.js'),
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
                use: ["style-loader","css-loader","sass-loader"]
            }
        ]
    },
/*    resolve: {

    },
    plugins: {

    }*/

};