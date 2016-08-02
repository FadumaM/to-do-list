module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      src: [
        'build/js/**/*.js',
      ],
    },
    sass: {
      expanded: {
        options: { outputStyle: 'expanded' },
        files: { 'css/app.css': 'build/scss/app.scss' },
      },
      compressed: {
        options: { outputStyle: 'compressed' },
        files: { 'css/app.min.css': 'build/scss/app.scss' },
      },
    },
    concat: {
      dist: {
        src: [
          'build/js/_bower.js',
          'build/js/app.js',
          'build/js/**/*.js',
        ],
        dest: 'js/app.js',
      },
    },
    uglify: {
      'js/app.min.js': 'js/app.js',
    },
    watch: {
      configFiles: {
        files: ['Gruntfile.js', 'package.json'],
        options: { reload: true },
      },
      scss: {
        files: ['build/scss/**/*.scss'],
        tasks: ['sass'],
        options: { livereload: true },
      },
      js: {
        files: ['build/js/**/*.js'],
        tasks: ['jshint', 'concat', 'uglify'],
        options: { livereload: true },
      },
      index: {
        files: ['index.html'],
        options: { livereload: true },
      },
    },
    replace: {
      production: {
        options: {
          patterns: [{
            match: /app\.js/,
            replacement: 'app.min.js',
          },
          {
            match: /app\.css/,
            replacement: 'app.min.css',
          },
        ],
        },
        files: [
          { expand: true, flatten: true, src: ['index.html'] },
        ],
      },
      development: {
        options: {
          patterns: [{
            match: /app\.min\.js/,
            replacement: 'app.js',
          },
          {
            match: /app\.min\.css/,
            replacement: 'app.css',
          },
        ],
        },
        files: [
          { expand: true, flatten: true, src: ['index.html'] },
        ],
      },
    },
  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', ['jshint', 'sass', 'concat', 'watch']);
};
