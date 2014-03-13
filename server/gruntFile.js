/*global module*/

module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-mocha-test');

  // Project configuration.
  grunt.initConfig({
    distdir: 'dist',
    clean: ['<%= distdir %>/*'],
    copy: {
        server: {
            files: [{ dest: '<%= distdir %>/', src : 'server.js' },
                    { dest: '<%= distdir %>/node_modules', src : '**', cwd: 'node_modules/', expand: true },
                    { dest: '<%= distdir %>/routes', src : '**', cwd: 'routes/', expand: true },
                    { dest: '<%= distdir %>/middleware', src : '**', cwd: 'middleware/', expand: true }]
        }
    },
    mochaTest: {
        test: {
            options: {
                reporter: 'spec'
            },
            src: ['test/**/*.js']
        }
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'default timestamp'
    },
    jshint: {
      files: ['gruntFile.js', 'server.js', 'middleware/**/*.js', 'routes/**/*.js', 'test/**/*.js'],
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        globals: {
            require: false,
            process: false,
            __dirname: false,
            console: false,
            module: false,
            exports: false,
            beforeEach: false,
            afterEach: false,
            describe: false,
            it: false
        }
      }
    }
  });

  // Default task.
  grunt.registerTask('default', ['jshint','mochaTest:test', 'build']);
  grunt.registerTask('build', ['clean', 'copy:server']);

  grunt.registerTask('timestamp', function() {
    grunt.log.subhead(Date());
  });

  grunt.registerTask('supervise', function() {
    this.async();
    require('supervisor').run(['server.js']);
  });
};
