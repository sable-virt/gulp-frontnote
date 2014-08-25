var gulp = require('gulp');
var gsg = require('./index');

gulp.task('default', function() {
    gulp.src('test/**/*.scss')
        .pipe(gsg({
            out: './docs',
            cwd: '../frontnote',
            verbose: false,
            clean: true
        }));
});