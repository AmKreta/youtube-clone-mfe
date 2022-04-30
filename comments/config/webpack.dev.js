const { merge } = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common.js');

const devConfig = {
    mode: 'development',
    devServer: {
        port: 3000,
        hot: true,
        historyApiFallback: {
            index: 'index.html'
        },
        compress: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html')
        })
    ],
}

module.export = merge(commonConfig, devConfig);


