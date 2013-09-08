module.exports=function(grunt){
	// Project and task configuration

	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),
		connect:{
			server:{
				options:{
					keepalive: true,  
					port:9000,
					base:'.'
				}
			}
		},
		less:{
			compile:{
				files:{
					"css/style.css":"less/style.less"
				}	
			}
		}
	});

	// Load plugins
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-connect');

	grunt.registerTask('default',['connect','less']);
}