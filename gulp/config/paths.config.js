const project = require('./project.config');

module.exports = {

    /* SRC ---------------------------------------------------------------------- */
    project_dev_url: 'http://localhost:3001',


    /* SRC ---------------------------------------------------------------------- */

    src: 'src/',
    src_ui: 'src/ui/',
    src_sass: 'src/ui/scss/',
    src_js: 'src/ui/js/',
    src_js_lint: [
        'src/ui/js/**/*.js',
        '!src/ui/js/vendors/**'
    ],
    src_images: 'src/ui/img/',
    src_masks: 'src/ui/svg/',
    src_fonts: 'src/ui/fonts/',
    src_html: 'src/views',

    /* DIST --------------------------------------------------------------------- */

    dist: 'web/frontend/',
    dist_css: 'web/frontend/css',
    dist_js: 'web/frontend/js',
    dist_js_vendors: 'web/frontend/js/vendors',
    dist_images: 'web/frontend/img',
    dist_masks: 'web/frontend/svg',
    dist_html: 'web',

    /* VENDORS ------------------------------------------------------------------ */

    vendors: [
        'node_modules/jquery/dist/jquery.js'
    ],

    /* ETC ------------------------------------------------------------------ */

    tasks: './gulp/tasks/',
    dev_url: 'http://localhost:3001',
    clean: [
        'web/**'
    ],
    watchers: {
        sass: 'src/ui/scss/**/*.scss',
        js: [
            'src/ui/js/**/*.js'
        ],
        assets: [
            'src/ui/img/**/*',
            'src/ui/fonts/**/*'
        ],
        html: 'src/views/*.html'
    }
};
