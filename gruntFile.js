module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-exec');


  // Default task.
  grunt.registerTask('default', ['clean', 'exec:defaultClient', 'exec:defaultServer', 'copy:default']);


  // Print a timestamp (useful for when watching)
  grunt.registerTask('timestamp', function() {
    grunt.log.subhead(Date());
  });

  // Project configuration.
  grunt.initConfig({
    builddir: 'build',
    pkg: grunt.file.readJSON('package.json'),
    banner:
    '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
    '<%= pkg.homepage ? " * " + pkg.homepage + "\\n" : "" %>' +
    ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>;\n' +
    ' * Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %>\n */\n',
    src: {
        client: ['client/dist'],
        server: ['server/dist']
    },
    dest: {
        client: ['<%= builddir %>/public'],
        server: ['<%= builddir %>']
    },
    clean: ['<%= builddir %>/*'],
    copy: {
      default: {
        files: [{ dest: '<%= builddir %>/', cwd: '<%= src.server %>/', src: '**', expand: true },
                { dest: '<%= builddir %>/public/', cwd: '<%= src.client %>/', src: '**', expand: true }]
      }
    },
    exec: {
        defaultClient: {
            cwd: 'client',
            cmd: 'grunt'
        },
        defaultServer: {
            cwd: 'server',
            cmd: 'grunt'
        }
    },
    watch:{
      all: {
        files:[],
        tasks:['default','timestamp']
      },
      build: {
        files:[],
        tasks:['build','timestamp']
      }
    }

  });

};
