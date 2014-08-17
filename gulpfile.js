var gulp = require('gulp');
var gsg = require('./index');

gulp.task('default', function() {
    gulp.src('../frontnote/test/less/**/*.less')
        .pipe(gsg());
});