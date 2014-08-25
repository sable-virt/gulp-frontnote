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
        if (file.isNull()) {
            this.push(file);
            return callback();
        }
        if (file.isBuffer()) {
            var filepath = path.relative(__dirname,file.path);
            if (options.cwd) {
                var reg = new RegExp('^' + options.cwd + '/');
                filepath = filepath.replace(reg,'');

            }
            filepath = path.resolve(__dirname,filepath);
            files.push(filepath);
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