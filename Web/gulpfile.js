var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    config = require('./gulpfile.config.js'),
    Karma = require('karma').Server;


gulp.task('linting', function () {
    return gulp.src(config.js.src)
            .pipe($.jshint(config.js.linting.options))
            .pipe($.jshint.reporter('default'))
            .on('error', $.util.log);
});

gulp.task('browser-sync', function () {
    
});

gulp.task('watch', function () {
    return gulp.watch(config.watch.src, ['browser-sync']);
});

gulp.task('test', function (done) {
    var karma = new Karma(config.karma.options, done).start();
});