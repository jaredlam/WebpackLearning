/**
 * Created by Jared on 16/12/6.
 */
module.exports = {
    devtool:"eval-source-map",
    entry: __dirname + "/app/main.js",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    }
};