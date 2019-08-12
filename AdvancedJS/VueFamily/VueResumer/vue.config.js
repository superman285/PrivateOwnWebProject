const TerserPlugin = require("terser-webpack-plugin");


module.exports = {
    publicPath: './',
    /*configureWebpack: config=>{
        if (process.env.NODE_ENV === 'production') {
            config.mode = "production";
            config.optimization.minimize = true;
            /!*config.optimization.minimizer[0] = new TerserPlugin({
                    terserOptions: {
                        compress: {
                            warnings: false,
                            drop_debugger: true,
                            drop_console: true
                        }
                    }
                });*!/
            config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;
        }
    },*/
    configureWebpack: {
        //mode: "production",
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
