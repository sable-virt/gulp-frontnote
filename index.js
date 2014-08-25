var through = require('through2'),
    path = require('path'),
    styleGuide = require('frontnote');

/**
 * プラグイン関数
 * @param options
 * @returns {*}
 */
function FrontNote(options) {
    var files = [];
    var stream = through.obj(function(file,encoding, callback) {
        this.push(file);
        return callback();
    });
    stream.on('data', function(file) {
        if (file.isBuffer()) {
            files.push(file.path);
        }
    });
    stream.on('end', function() {
        styleGuide(files,options);
    });
    return stream;
}
// プラグイン関数をエクスポート
module.exports = FrontNote;