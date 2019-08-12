const TerserPlugin = require("terser-webpack-plugin");


module.exports = {
    publicPath: './',
    /*configureWebpack: config=>{
        if (process.env.NODE_ENV === 'production') {
            config.mode = "production";
            config.optimization.minimize = true;
            config.optimization.minimizer = [
                new TerserPlugin({
                    terserOptions: {
                        compress: {
                            warnings: false,
                            drop_debugger: true,
                            drop_console: true
                        }
                    }
                })
            ];
        }
    },*/
};
