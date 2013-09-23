module.exports = function(grunt) {
	// Project and task configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		connect: {
			server: {
				options: {
					keepalive: true,
					port: 9000,
					base: '.'
				}
			}
		},
		less: {
			development: {
				files: {
					"css/style.css": "less/style.less"
				}
			}
		},
		watch: {
			styles: {
				files: ['less/**/*.less'],
				tasks: ['less']
			},
			livereload: {
				options: {
					livereload: true
				},
				files: ['less/**/*'],
			},

		}
	});

	// Load plugins
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('less', ['watch:styles']);
	grunt.registerTask('default', ['connect']);
}