'use strict';

const registry = require('groundcontrol').getRegistry();
const gulp = require('gulp');
const paths = require('./gulp/config/paths.config');
const open = require('open');

// Register Groundcontrol Tasks
gulp.registry(registry);

// Load Custom Tasks

// Define watch task
gulp.task('watch', function watch(done) {
    gulp.watch(paths.watchers.sass, gulp.task('css:dev'));
    gulp.watch(paths.watchers.html, gulp.parallel('inject:css', 'inject:js:dev'));
    gulp.watch(paths.watchers.js, gulp.parallel('es:lint', 'es:footer:dev', 'inject:js:dev'));
    gulp.watch(paths.watchers.assets, gulp.parallel('copy:assets', 'images'));
    done();
});

// Define build task for development
gulp.task('build:dev', gulp.series(
    'clean',
    gulp.parallel(
        'copy:assets',
        'images',
        'css:dev',
        'es:lint',
        'es:vendors:dev',
        'es:footer:dev'
    ),
    'inject:css',
    'inject:js:dev'
));

// Define build task for production
gulp.task('build:prod', gulp.series(
    'clean',
    gulp.parallel(
        'copy:assets',
        'images',
        'css:prod',
        'es:vendors:prod',
        'es:footer:prod'
    ),
    'inject:css',
    'inject:js:prod'
));

// Define task for development
gulp.task('dev', gulp.series(
    'build:dev',
    gulp.parallel('server', 'watch')
    //openBrowser
));

// Define default gulp task
gulp.task('default', gulp.series('dev'));

// Define build task for skylab deploy
gulp.task('build', gulp.series('build:prod'));


// Open browser with local development environment
function openBrowser(cb) {
    open(paths.project_dev_url);
    cb();
}

// Convenience function for loading tasks
function loadTask(task) {
    require(`${paths.tasks + task}.task`)();
}