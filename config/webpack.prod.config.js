const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
    entry: {
        'vue-static-terminal': path.resolve(__dirname + '/../src/components/StaticTerminal.vue'),
        'vue-static-terminal.min': path.resolve(__dirname + '/../src/components/StaticTerminal.vue')
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '../dist/',
        filename: '[name].js',
        library: 'vue-static-terminal',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    extractCSS: true,
                    minimize: true
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/,
            minimize: true,
            sourceMap: false,
            mangle: true,
            compress: {
                warnings: false
            }
        }),
        new ExtractTextPlugin('vue-static-terminal.css')
    ]
}
