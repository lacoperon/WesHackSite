
module.exports = function(grunt) {
  grunt.initConfig({
    htmlmin: {                                     // Task
      dist: {                                      // Target
        options: {                                 // Target options
          removeComments: true,
          collapseWhitespace: true
        },
        files: {                                   // Dictionary of files
          'ProductionFiles/index.html': 'index.html',
          'ProductionFiles/about.html': 'about.html',
          'ProductionFiles/contact.html': 'contact.html',
          'ProductionFiles/events.html': 'events.html',
          'ProductionFiles/FAQ.html': 'FAQ.html',
          'ProductionFiles/left-sidebar.html': 'left-sidebar.html',
          'ProductionFiles/mailing.html': 'mailing.html',
          'ProductionFiles/no-sidebar.html': 'no-sidebar.html',
          'ProductionFiles/right-sidebar.html': 'right-sidebar.html'
        }
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'assets/css',
          src: ['*.css', '*.css'],
          dest: 'ProductionFiles/assets/css',
          ext: '.css'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['htmlmin', 'cssmin']);
}
