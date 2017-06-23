module.exports = function(grunt) {

  grunt.initConfig({
    watch: {
      files: ['less'],
      tasks: ['less']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['']);

};
