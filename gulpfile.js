var gulp = require('gulp');
var gsg = require('./index');

gulp.task('default', function() {
    gulp.src('../frontnote/test/less/**/*')
        .pipe(gsg({
            cwd: '../frontnote',
            verbose: false,
            clean: true
        }));
});