// through2はnodeのtransform streamをラップするもの
var through = require('through2'),
    styleGuide = require('frontnote');

/**
 * プラグイン関数
 * @param options
 * @returns {*}
 */
function FrontNote(options) {
    var files = [];
    return through.obj(function(file,encoding, callback) {
        this.push(file);
        files.push(file.path);
        callback();
    }, function(callback) {
        styleGuide(files,options,callback);
    });
}
// プラグイン関数をエクスポート
module.exports = FrontNote;