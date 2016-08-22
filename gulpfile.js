'use strict';

/* Setup Gulp
 ========================================================================== */
// Require
var gulp = require('gulp'),
    del = require('del'),
    fs = require('fs'),
    path = require('path'),
    rebase = require('rebase/tasks/gulp-rebase'),
    notifier = require('node-notifier'),
    runSequence = require('run-sequence'),
    browserSync = require('browser-sync').create(),
    plugins = require('gulp-load-plugins')();

// Gulp Config
var showErrorNotifications = true,
    addAsyncTag = false;

// Project Config
var resourcesPath = './app/resources/',
    distPath = './web/',
    bowerComponentsPath = 'app/Resources/vendor_bower/';

var jsFooter = [
    bowerComponentsPath + 'jquery/dist/jquery.min.js',
    bowerComponentsPath + 'gsap/src/minified/TweenMax.min.js',
    bowerComponentsPath + 'snap.svg/dist/snap.svg-min.js',
    bowerComponentsPath + 'slick-carousel/slick/slick.min.js',
    bowerComponentsPath + 'bootstrap-sass-official/assets/javascripts/bootstrap/scrollspy.js',
    resourcesPath + 'ui/js/**/*.js'
];

/* Errorhandling
 ========================================================================== */
var errorLogger, headerLines;

errorLogger = function(headerMessage,errorMessage){
    var header = headerLines(headerMessage);
    header += '\n             '+ headerMessage +'\n           ';
    header += headerLines(headerMessage);
    header += '\r\n \r\n';
    plugins.util.log(plugins.util.colors.red(header) + '             ' + errorMessage + '\r\n')

    if(showErrorNotifications){
        notifier.notify({
            'title': headerMessage,
            'message': errorMessage,
            'contentImage':  __dirname + '/gulp_error.png'
        });
    }
};

headerLines = function(message){
    var lines = '';
    for(var i = 0; i< (message.length + 4); i++){
        lines += '-';
    }
    return lines;
};

/* Jekyll build commands
 ========================================================================== */

//development build
gulp.task('jekyll:dev', plugins.shell.task('JEKYLL_ENV=development bundle exec jekyll build'));
gulp.task('jekyll-rebuild', ['jekyll:dev'], function () {
    browserSync.reload;
});

//production build
gulp.task('jekyll:prod', plugins.shell.task('JEKYLL_ENV=production bundle exec jekyll build --config _config.yml,_config.build.yml'));

/* Styles
 ========================================================================== */
gulp.task('styles', function() {
    return gulp.src(resourcesPath + 'ui/scss/**/*.scss')
        // Sass
        .pipe(plugins.sass().on('error', plugins.sass.logError))

        // Combine Media Queries
        .pipe(plugins.combineMq())

        // Prefix where needed
        .pipe(plugins.autoprefixer('ie 11'))

        // Minify output
        .pipe(plugins.minifyCss())

        // Rename the file to respect naming covention.
        .pipe(plugins.rename(function(path){
            path.basename += '.min';
        }))

        // Write to output
        .pipe(gulp.dest(distPath + 'frontend/css/'));
});

/* Javascript
 ========================================================================== */

//Jshint
gulp.task('jshint', function() {
    return gulp.src([resourcesPath + 'ui/js/**/*.js', '!' + resourcesPath + 'ui/js/vendors/**/*.js'])

        .pipe(plugins.jshint())
        .pipe(plugins.jshint.reporter(require('jshint-stylish')));
});

// Production
gulp.task('scripts-prod', ['jshint'], function() {
    return gulp.src(jsFooter)
        // Uglify
        .pipe(plugins.uglify({
            mangle: {
                except: ['jQuery']
            }
        }))
        .on('error', function (err) {
            errorLogger('Javascript Error', err.message);
        })

        // Concat
        .pipe(plugins.concat('app.min.js'))

        // Revision
        .pipe(plugins.rev())

        // Set destination
        .pipe(gulp.dest(distPath + 'frontend/js/'));
});

gulp.task('inject-prod-scripts', ['scripts-prod'], function() {
    return gulp.src('./app/_includes/js_footer.html')
        // Inject
        .pipe(plugins.inject(gulp.src(distPath + 'frontend/js/*.js'), {
            transform: addAsyncTag,
            ignorePath: '/web'
        }))

        // Write
        .pipe(gulp.dest(resourcesPath + 'app/_includes/js_footer.html'));
});


// Development
gulp.task('scripts-dev', ['jshint'], function() {
    return gulp.src(jsFooter)
        // Flatten
        .pipe(plugins.flatten())

        // Write
        .pipe(gulp.dest(distPath + 'frontend/js/'));
});

gulp.task('inject-dev-scripts', ['scripts-dev'], function() {
    var files = gulp.src(jsFooter, {read: false});

    return gulp.src(distPath + '**/*.html')
        // Inject
        .pipe(plugins.inject(files))

        // Rebase
        .pipe(rebase({
            script: {
                '(\/[^"]*\/)': '/frontend/js/'
            }
        }))

        .pipe(gulp.dest(distPath));
});

/* Images
 ========================================================================== */
gulp.task('images', function() {
    return gulp.src(resourcesPath + 'ui/img/**/*.{png,jpg,jpeg,gif,svg,webp}')
        // Only optimize changed images
        .pipe(plugins.changed(distPath + 'frontend/img/'))

        // Imagemin
        .pipe(plugins.imagemin({
            optimizationLevel: 3,
            progressive: true,
            svgoPlugins: [{
                removeViewBox: false
            }]
        }))

        // Set destination
        .pipe(gulp.dest(distPath + 'frontend/img/'));
});



/* Fonts
 ========================================================================== */
gulp.task('fonts', function() {
    return gulp.src(resourcesPath + 'ui/fonts/**/*.{eot,svg,ttf,woff,woff2,json}')
        // Set destination
        .pipe(gulp.dest(distPath + 'frontend/fonts/'));
});

/* Clean/clear
 ========================================================================== */
gulp.task('clean', del.bind(null, ['web/frontend/']));

/* Browsersync
 ========================================================================== */
gulp.task('serve:dev', function () {
    browserSync.init({
        server: {
            baseDir: 'web'
        }
    });

    gulp.watch(['./app/**/*.md', './app/**/*.html', './app/**/*.xml', './app/**/*.txt'], ['styles', 'images','inject-dev-scripts', 'jekyll-rebuild']);
    gulp.watch([distPath + 'frontend/css/*.css'], browserSync.reload);
    gulp.watch([resourcesPath + 'ui/scss/**/*.scss'], ['styles']);
    gulp.watch([resourcesPath + 'ui/js/**/*.js'], ['inject-dev-scripts']);
    gulp.watch([resourcesPath + 'ui/img/**/*.{png,jpg,jpeg,gif,svg,webp}'], ['images']);
});

/* Bundled
 ========================================================================== */
// Default task
gulp.task('default', function(done) {
    runSequence(
        'clean',
        'jekyll:dev',
        ['styles', 'images', 'fonts', 'inject-dev-scripts'],
        'serve:dev',
    done);
});
