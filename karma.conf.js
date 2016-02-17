module.exports = function(config) {

    config.set({
        basePath: '',
        frameworks: ['jasmine', 'browserify'],
        files: [
            'src/maybee.js',
            'test/maybee.test.js'
        ],
        reporters: ['spec'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Firefox'],
        singleRun: true,
        preprocessors: {
            'src/*.js': ['browserify'],
            'test/*.js': ['browserify']
        },
        browserify: {
            debug: true,
            transform: [["babelify", { presets: ['es2015'] }]]
        }
    });
};
