const {merge} = require('webpack-merge');
const config = require('./webpack.common');

const prodConfig = {
    mode: 'development'
}

module.exports = merge(config, prodConfig);