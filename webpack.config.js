/**
 * Created by Jared on 16/12/6.
 */
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    devtool: "eval-source-map",
    entry: __dirname + "/app/main.js",
    output: {
        path: __dirname + "/build",
        filename: "[name]-[hash].js"
    },
    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: "json"
            },
            {
                test: /\.js$/,
                loader: "babel",
                exclude: "/node_modules/"
            },
            {
                test: /\.css$/,
                loader: "style!css?modules!postcss"
            }
        ]
    },
    postcss: [
        require('autoprefixer')
    ],
    plugins: [
        new webpack.BannerPlugin("This is a copyright"),
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html"
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin("[name]-[hash].css")
    ],
    devServer: {
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        colors: true,//终端中输出结果为彩色
        historyApiFallback: true,//不跳转,
        port: 9000,
        inline: true//实时刷新
    }
};