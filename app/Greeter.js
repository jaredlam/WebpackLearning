/**
 * Created by Jared on 16/12/6.
 */
var config = require('./config.json');
module.exports = function () {
    var greet = document.createElement('div');
    greet.textContent = config.greetText;
    return greet;
};