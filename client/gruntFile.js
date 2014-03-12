module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-karma');

  // Default task.
  grunt.registerTask('default', ['jshint','build','karma:unit']);
  grunt.registerTask('build', ['clean','concat','sass:build','copy:assets']);
  grunt.registerTask('release', ['clean','uglify','jshint','karma:unit','concat:index', 'sass:min','copy:assets']);
  grunt.registerTask('test-watch', ['karma:watch']);

  // Print a timestamp (useful for when watching)
  grunt.registerTask('timestamp', function() {
    grunt.log.subhead(Date());
  });

  // Project configuration.
  grunt.initConfig({
    distdir: 'dist',
    pkg: grunt.file.readJSON('package.json'),
    banner:
    '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
    '<%= pkg.homepage ? " * " + pkg.homepage + "\\n" : "" %>' +
    ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>;\n' +
    ' * Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %>\n */\n',
    src: {
        mb: ['src/app/mb-main.js', 'src/app/modules/*.js'],
        test: ['test/**/*.spec.js'],
        html: ['src/index.html'],
        sass: ['src/sass/main.scss'],
        sassWatch: ['src/sass/**.css'],
        bootstrapSass: ['vendor/bootstrap/**/*.scss']

    },
    dest: {
        css: '<%= distdir %>/<%= pkg.name %>.css'
    },
    clean: ['<%= distdir %>/*'],
    copy: {
      assets: {
        files: [{ dest: '<%= distdir %>', src : '**', expand: true, cwd: 'src/assets/' },
                { dest: '<%= distdir %>/fonts', src : '**', expand: true, cwd: 'vendor/bootstrap/fonts' }]
      }
    },
    karma: {
      options: {
          configFile: 'test/config/karma.conf.js'
      },
      unit: {
          browsers: ['Firefox']
      },
      watch: {
          singleRun: false,
          autoWatch: true
      }
    },
    concat:{
      dist:{
        options: {
          banner: "<%= banner %>"
        },
        src:['<%= src.mb %>'],
        dest:'<%= distdir %>/<%= pkg.name %>.js'
      },
      index: {
        src: ['src/index.html'],
        dest: '<%= distdir %>/index.html',
        options: {
          process: true
        }
      },
      angular: {
        src:['vendor/angular/angular.js', 'vendor/angular/angular-*.js'],
        dest: '<%= distdir %>/angular.js'
      },
      angularui: {
        src:['vendor/angular-ui/utils/*.js', 'vendor/angular-ui/router/*.js', 'vendor/angular-ui/bootstrap/*.js'],
        dest: '<%= distdir %>/angular-ui.js'
      }
    },
    uglify: {
      dist:{
        options: {
          banner: "<%= banner %>"
        },
        src:['<%= src.js %>' ,'<%= src.jsTpl %>'],
        dest:'<%= distdir %>/<%= pkg.name %>.js'
      },
      angular: {
        src:['<%= concat.angular.src %>'],
        dest: '<%= distdir %>/angular.js'
      },
      bootstrap: {
        src:['vendor/angular-ui/bootstrap/*.js'],
        dest: '<%= distdir %>/bootstrap.js'
      }
    },
    sass: {
        build: {
            options: {
                style: 'expanded'
            },
            files: {
                '<%= dest.css %>': '<%= src.sass %>',
                '<%= distdir %>/bootstrap.css': '<%= src.bootstrapSass %>'
            }
        },
        min: {
            options: {
                style: 'compressed'
            },
            files: {
                '<%= dest.css %>': '<%= src.sass %>',
                '<%= distdir %>/bootstrap.css': '<%= src.bootstrapSass %>'
            }
        }
    },
    watch:{
      all: {
        files:['<%= src.js %>', '<%= src.html %>', '<%= src.sassWatch %>'],
        tasks:['default','timestamp']
      },
      build: {
        files:['<%= src.js %>', '<%= src.html %>', '<%= src.sassWatch %>'],
        tasks:['build','timestamp']
      }
    },
    jshint:{
      files:['gruntFile.js', '<%= src.mb %>', '<%= src.test %>'],
      options:{
        curly:true,
        eqeqeq:true,
        immed:true,
        latedef:true,
        newcap:true,
        noarg:true,
        sub:true,
        boss:true,
        eqnull:true,
        globals:{}
      }
    }
  });

};
