'use strict';

module.exports = function(grunt) {

  // Force use of Unix newlines
  grunt.util.linefeed = '\n';

  // Project configuration.
  grunt.initConfig({
        // Meta data
        pkg: grunt.file.readJSON('package.json'),
        copy: {
          bower: {
            files: [
              {
                expand: true,
                cwd: 'bower_components/jquery/dist/',
                src: ['*'],
                dest: 'js/'
              },
              {
                expand: true,
                cwd: 'bower_components/bootstrap-sass/assets/stylesheets/',
                src: ['**/*.scss'],
                dest: 'sass/twbs/'
              },
              {
                expand: true,
                cwd: 'bower_components/bootstrap/dist/css/',
                src: ['bootstrap.{css,css.map,min.css}'],
                dest: 'css'
              },
              {
                expand: true,
                cwd: 'bower_components/bootstrap/dist/js/',
                src: ['bootstrap*'],
                dest: 'js'
              },
              {
                expand: true,
                cwd: 'bower_components/bootstrap/dist/fonts/',
                src: ['*'],
                dest: 'fonts'
              }
            ]
          }
        },
        watch: {
            files: 'sass/**/*.scss',
            tasks: ['sass']
        },
        sass: {
            dev: {
                options: {
                  sourcemap: 'none',
                  style: 'compressed'
                },
                files: {
                    'css/main.css': 'sass/main.scss'
                }
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'css/*.css',
                        '*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: '.'
                }
            }
        }
    });

    // load npm tasks
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');

    // define default task
    grunt.registerTask('default', ['browserSync', 'watch']);

};
