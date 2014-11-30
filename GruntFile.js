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
    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass', 'cssmin', 'clean']
      }
    },
    cssmin: {
      add_banner: {
        files: [{
          expand: true,
          cwd: 'dist/css/',
          src: ['main.min.css'],
          dest: 'dist/css/',
          ext: '.min.css'
        }]
      }
    },
    clean: {
      build: {
        src: ['.sass-cache/']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.registerTask('default',['watch', 'cssmin', 'clean']);

}