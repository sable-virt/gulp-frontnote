var gulp = require('gulp');
var frontnote = require('./index');

gulp.task('default', function() {
    gulp.src('sample/**/*.scss')
        .pipe(frontnote({
            out: './docs',
            verbose: false,
            clean: true
        })).pipe(gulp.dest('./dest'))
});