const
    getArg = require('./lib/getArg'),
    destFolder = getArg('--build') ? './build' : './public';

module.exports = {
    'root': {
        'src': './src',
        'dest': destFolder
    },

    'tasks': {
        'browserSync': {
            'server': {
                'baseDir': 'public'
            }
        },

        'static': {
            'src': 'assets/static',
            'dest': './',
            'extensions': ['*']
        },

        'fonts': {
            'src': 'assets/fonts',
            'dest': 'assets/fonts',
            'extensions': ['*']
        },

        'js': {
            'src': '.',
            'dest': 'js',
            'entries': {
                'app': ['./app.js']
            },
            'extensions': ['js', 'json'],
            'babel': {
                'presets': [['es2015', { 'modules': false }]],
                'plugins': []
            },
            'extractSharedJs': false
        },

        'css': {
            'src': 'assets/scss',
            'dest': 'assets/css',
            'sass': {
                'includePaths': [
                    './node_modules'
                ]
            },
            'extensions': ['scss', 'css']
        },

        'images': {
            'src': 'assets/images',
            'dest': 'assets/images',
            'extensions': ['jpg', 'png', 'svg', 'gif']
        },

        'svgSprite': {
            'src': 'assets/symbols',
            'dest': 'assets/images',
            'extensions': ['svg']
        },

        'production': {
            'rev': true
        },

        'eslint': {
            'src': '.',
            'extensions': ['json']
        },

        'stylelint': {
            'src': 'assets/scss',
            'extensions': ['scss', 'css']
        }
    }
};
