const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config.js')
const devConfig = require('./webpack.dev.config.js')
const proConfig = require('./webpack.pro.config.js')

// const config = process.env.NODE_ENV === 'development' ? devConfig : proConfig

module.exports = (env, argv) => {
    let config = argv.mode === 'development' ? devConfig : proConfig; // 通过不同的环境，我们运行不同的webpack文件
    return baseConfig;
};