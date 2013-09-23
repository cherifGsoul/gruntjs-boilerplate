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
		recess: {
			dist: {
				options: {
					compile: true
				},
				files: {
					'css/style.css': ['less/style.less']
				}
			}
		},
		watch: {
			styles: {
				files: ['less/*.less'],
				tasks: ['recess'],
				options: {
			        livereload: true,
      			},
			}
		}
	});

	// Load plugins
	// grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-recess');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');

	
	grunt.registerTask('default', ['connect']);
	// grunt.registerTask('watch', ['watch:styles']);
}