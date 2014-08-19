var through = require('through2'),
    styleGuide = require('frontnote');

/**
 * プラグイン関数
 * @param options
 * @returns {*}
 */
function FrontNote(options) {
    var files = [];
    var stream = through.obj(function(file,encoding, callback) {
        if (file.isNull()) {
            this.push(file);
            return callback();
        }
        if (file.isBuffer()) {
            files.push(file.path);
            this.push(file);
        }
        return callback();
    });
    stream.on('finish', function(callback) {
        styleGuide(files,options,callback);
    });
    return stream;
}
// プラグイン関数をエクスポート
module.exports = FrontNote;