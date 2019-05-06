'use strict'

const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const HOST = 'localhost'
const PORT = 8080

module.exports = merge(baseConfig, {
    mode: 'development',
    entry: {
        app: './src/main.js',
    },
    output: {
        path: __dirname + "/build",
        filename: '[name].js',
        publicPath: "/"
    },
    devServer: {
        clientLogLevel: 'warning',
        hot: true,
        contentBase: './public',
        compress: true,
        inline: true,
        host: HOST,
        port: PORT,
        open: true,
        overlay: { warnings: false, errors: true },
        publicPath: '/',
        quiet: true,
        watchOptions: {
            poll: true
        },
        historyApiFallback: true
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin()
    ]
})
