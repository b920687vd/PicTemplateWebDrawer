const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require("html-webpack-inline-source-plugin");
// var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        'app': './src/index.ts'   // 入口文件
    },
    output: {
        filename: '[name].[chunkhash:8].js' // 编译的文件以名字.hash值结尾
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/i,
                use: [{
                    loader: 'ts-loader'
                }],
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|mp3|skel)$/i,
                use: [
                  {
                    loader: "url-loader",
                    options: {},
                  },
                ],
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',    // 启动HTML文件
            inlineSource: ".(js|css)$",
        }),
        new HtmlWebpackInlineSourcePlugin()
    ],
    optimization: { // 简单拆包
        splitChunks: {
            chunks: 'all'
        }
    }
}