module.exports = function(config) {

    config.set({
        // base path, that will be used to resolve files and exclude
        basePath: '../..',

        frameworks: ['jasmine'],

        plugins: [
            'karma-jasmine',
            'karma-firefox-launcher',
            'karma-chrome-launcher',
            'karma-phantomjs-launcher',
            'karma-junit-reporter'
        ],

        // list of files / patterns to load in the browser
        file: [
          'vendor/angular/angular.js',
          'test/vendor/angular-mocks.js',
          'vendor/angular/angular-*.js',
          'vendor/angular-ui/**/*.js',
          'src/**/*.js',
          'test/**/*.spec.js'
        ],

        exclude: ['**/angular-scenario.js'],

        // use dots reporter, as travis terminal does not support escaping sequences
        // possible values: 'dots' || 'progress'
        reporters: 'progress',

        // these are default values, just to show available options

        // web server port
        port: 8189,

        // cli runner port
        runnerPort: 9109,

        urlRoot: '/__test/',

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel: config.LOG_DEBUG,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // polling interval in ms (ignored on OS that support inotify)
        autoWatchInterval: 0,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari
        // - PhantomJS
        browsers: ['Chrome'],

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: true
    });
};