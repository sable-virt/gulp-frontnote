var through = require('through2'),
    FrontNote = require('frontnote');

/**
 * プラグイン関数
 * @param options
 * @returns {*}
 */
function gulpFrontNote(options) {
    var files = [];
    var note = new FrontNote(options);
    var stream = through.obj(function(file,encoding, callback) {
        if (file.isBuffer()) {
            files.push(file.path);
        }
        this.push(file);
        callback();
    },function(callback) {
        note.render(files, callback);
    });
    return stream;
}
// プラグイン関数をエクスポート
module.exports = gulpFrontNote;