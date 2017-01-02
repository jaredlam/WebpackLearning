/**
 * Created by Jared on 16/12/6.
 */
module.exports = {
    devtool: "eval-source-map",
    entry: __dirname + "/app/main.js",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
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
    devServer: {
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        colors: true,//终端中输出结果为彩色
        historyApiFallback: true,//不跳转,
        port: 9000,
        inline: true//实时刷新
    }
};