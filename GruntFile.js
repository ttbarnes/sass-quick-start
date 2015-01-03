module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: {
          'dist/css/main.css' : 'scss/main.scss'
        }
      }
    },
    cssmin: {
      add_banner: {
        files: [{
          expand: true,
          cwd: 'dist/css/',
          src: ['main.css'],
          dest: 'dist/css/',
          ext: '.min.css'
        }]
      }
    },
    clean: {
      build: {
        src: ['.sass-cache/']
      }
    },
    watch: {
      css: {
        files: 'scss/*.scss',
        tasks: ['sass', 'cssmin', 'clean']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default',['watch']);
}