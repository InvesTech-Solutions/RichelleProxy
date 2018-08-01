module.exports = function(grunt) {
   grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
  
  uglify: {
    my_target: {
      files: {
        'client/dist/grunt/bundle.min.js': ['client/dist/bundle.js']
      }
    }
  }, 

cssmin: {
  target: {
    files: {
      'client/dist/grunt/style.min.css': ['client/dist/style.css']
    }
  }
},

});

grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-uglify');

grunt.registerTask('default', ['cssmin', 'uglify']);



};
