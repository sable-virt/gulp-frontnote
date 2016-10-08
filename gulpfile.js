var gulp = require('gulp');
var frontnote = require('./index');

gulp.task('default', function() {
    return gulp.src('sample/**/*.scss')
        .pipe(frontnote({
            out: './docs',
            verbose: true,
            clean: true
        })).pipe(gulp.dest('./dest'))
});