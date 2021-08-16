const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    plugins: [
        new CleanWebpackPlugin()  // 生产环境我们只先添加build清除文件，用来清除每次build产生的hash文件，避免因为无用文件导致打包过大
    ]
}