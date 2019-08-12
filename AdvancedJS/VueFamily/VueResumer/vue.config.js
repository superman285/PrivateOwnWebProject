const TerserPlugin = require("terser-webpack-plugin");


module.exports = {
    publicPath: './',
    configureWebpack: {
        mode: "production",
        optimization: {
            minimize: true,
            minimizer: [
                new TerserPlugin({
                    terserOptions: {
                        compress: {
                            warnings: false,
                            drop_debugger: true,
                            drop_console: true
                        }
                    }
                })
            ]
        },
    },
};
