module.exports = {
    js: {
        src: './app/**/*.js',
        dest: 'wwwroot/dist/js',
        linting: {
            options: {
                'undef': true
            }
        }
    },
    watch: {
        src: ['**/app/**/*.js', 'index.html', '**/app/**/*.html', '**/app/**/*.css']
    },
    karma: {
        options: {
            configFile: __dirname + '/karmaconfig.js'
        }
    },
    html: {
        src: './index.html',
        dest: 'wwwroot/',
    },
    css: {
        src: './**/*.css',
        dest: 'wwwroot/dist/css'
    }
};