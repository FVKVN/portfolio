'use strict';

const paths = require('./gulp/config/paths.config');
const project = require('./gulp/config/project.config');

module.exports = {
    blueprints: {
        clean:[
            {
                name: 'clean',
                description: '',
                del: paths.clean
            },
            {
                name: 'clean:temp',
                description: '',
                del: '.temp'
            }
        ],

        css: [
            {
                name: 'css:dev',
                description: '',
                src: paths.src_sass + '**/*.scss',
                dest: paths.dist_css,
                lint: false,
                sourcemaps: true,
                autoprefix: {
                    browsers: ['last 2 versions', 'ie 9', 'ie 10', 'ie 11']
                },
                combineMQ: false,
                minify: {
                    autoprefixer: {
                        remove: false
                    }
                },
                bless: false,
                rev: false
            },
            {
                name: 'css:prod',
                description: '',
                src: paths.src_sass + '**/*.scss',
                dest: paths.dist_css,
                lint: false,
                sourcemaps: false,
                autoprefix: {
                    browsers: ['last 2 versions', 'ie 9', 'ie 10', 'ie 11']
                },
                combineMQ: false,
                minify: {
                    autoprefixer: {
                        remove: false
                    }
                },
                bless: false,
                rev: false
            }
        ],

        image : {
            name: 'images',
            description: '',
            src: paths.src_images + '**/*.{png,jpg,jpeg,gif,svg,webp}',
            dest: paths.dist_images,
            imagemin: {
                optimizationLevel: 3,
                progressive: true,
                svgoPlugins: [{
                    removeViewBox: false
                }]
            }
        },

        copy: [
            {
                name: 'copy:assets',
                description: '',
                src: [
                    [
                        paths.src_fonts + '**/*.{eot,svg,ttf,woff,woff2}'
                    ],
                    {
                        base: paths.src_ui,
                        dot: true
                    }
                ],
                dest: paths.dist,
                rev: false
            },
            {
                name: 'copy:html',
                description: '',
                src: [
                    [
                        paths.src_html + '**/*.html'
                    ]
                ],
                dest: paths.dist,
                rev: false
            }
        ],

        ecmascript: [
            {
                name: 'es:lint',
                description: '',
                src: paths.src_js_lint,
                dest: false,
                lint: true,
                failAfterLintError: false,
                concat: false,
                minify: false,
                rev: false,
                sourcemaps: false,
                babel: false
            },
            {
                name: 'es:vendors:dev',
                description: '',
                src: paths.vendors,
                dest: paths.dist_js_vendors,
                lint: false,
                failAfterLintError: false,
                concat: false,
                minify: false,
                rev: false,
                sourcemaps: false,
                babel: false
            },
            {
                name: 'es:footer:dev',
                description: '',
                src: paths.src_js + '**/*.js',
                dest: paths.dist_js,
                lint: false,
                failAfterLintError: false,
                concat: false,
                minify: false,
                rev: false,
                sourcemaps: true,
                babel: true
            },
            {
                name: 'es:vendors:prod',
                description: '',
                src: paths.vendors,
                dest: paths.dist_js,
                lint: false,
                failAfterLintError: false,
                concat: 'vendors.min.js',
                minify: true,
                rev: true,
                sourcemaps: false,
                babel: false
            },
            {
                name: 'es:footer:prod',
                description: '',
                src: paths.src_js + '**/*.js',
                dest: paths.dist_js,
                lint: false,
                failAfterLintError: false,
                concat: 'footer.min.js',
                minify: true,
                rev: true,
                sourcemaps: false,
                babel: true
            }
        ],

        inject: [
            {
                name: 'inject:css',
                description: '',
                src: paths.src_html + '/*.html',
                dest: paths.dist_html,
                injectables: [
                    {
                        stream: paths.dist_css + '/**/*',
                        order: false,
                        read: false,
                        relative: true,
                        config: {
                            ignorePath: 'web'
                        }
                    }
                ]
            },
            {
                name: 'inject:js:dev',
                description: '',
                src: paths.src_html + '/*.html',
                dest: paths.dist_html,
                injectables: [
                    {
                        stream: paths.dist_js + '/**/*',
                        order: [
                            'vendors/jquery.js',
                            'vendors/**/*',
                            '!app.js',
                            'scrollService.js',
                            '**/*.js',
                            'app.js'
                        ],
                        read: false,
                        relative: true,
                        config: {
                            ignorePath: 'web'
                        }
                    }
                ]
            },
            {
                name: 'inject:js:prod',
                description: '',
                src: paths.src_html + '/*.html',
                dest: paths.dist_html,
                injectables: [
                    {
                        stream: paths.dist_js + '/**/*',
                        order: [
                            'vendors*.js'
                        ],
                        read: false,
                        relative: true,
                        config: {
                            ignorePath: 'web'
                        }
                    }
                ]
            }
        ],

        server: {
            name: 'server',
            description: '',
            serverName: 'devServer',
            browserSync: {
                ui: false,
                ghostMode: false,
                files: [
                    paths.dist_css + '/*.css',
                    paths.dist_js + '/*.js',
                    paths.dist_images + '/**/*',
                    paths.dist_html + '/*.html'
                ],
                open: true,
                reloadOnRestart: true,
                notify: true,
                server: './web'
                // proxy: {
                //     target: 'localhost:3001'
                // },
            }
        }
    }
};