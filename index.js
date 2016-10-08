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
            files.push(file);
        }
        callback();
    },function(callback) {
        var pathes = [];
        files.forEach(function(file) {
            this.push(file);
            pathes.push(file.path);
        }.bind(this));
        note.render(pathes).subscribe(function(){
            stream.resume();
            callback();
        });
    });
    stream.pause();
    return stream;
}
// プラグイン関数をエクスポート
module.exports = gulpFrontNote;