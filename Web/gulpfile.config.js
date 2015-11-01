module.exports = {
    js: {
        src: '**/app/**/*.js',
        dest: 'wwwroot/dist/js',
        linting: {
            options: {
                'undef': true
            }
        }
    },
    watch: {
        src: ['**/app/**/*.js', 'index.html', '**/app/**/*.html', '**/app/**/*.css']
    }
};