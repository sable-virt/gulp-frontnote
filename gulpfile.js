var gulp = require('gulp');
var gsg = require('./index');

gulp.task('default', function() {
    gulp.src('../frontnote/test/sample/**/*.scss')
        .pipe(gsg({
            out: './docs',
            verbose: false,
            clean: true
        })).pipe(gulp.dest('./dest'))
});