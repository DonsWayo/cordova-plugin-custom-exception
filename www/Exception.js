var exec = require('cordova/exec');

exports.throwException = function (arg0, success, error) {
    exec(success, error, 'Exception', 'throwException', [arg0]);
};
