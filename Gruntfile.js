module.exports = function(grunt) {

	var npmDependencies = require('./package.json').dependencies;

	grunt.initConfig({

		// Watches for changes and runs tasks
		watch : {
			sass : {
				files : ['scss/**/*.scss'],
				tasks : ['sass:dev']
			},
			css : {
				files : ['dist/css/**/*.css'],
				options : {
					livereload : true
				}
			},
			js : {
				files : ['js/**/*.js'],
				tasks : ['jshint', 'uglify:dev'],
				options : {
					livereload : true
				}
			},
			php : {
				files : ['**/*.php'],
				options : {
					livereload : true
				}
			}
		},

		// JsHint your javascript
		jshint : {
			all : ['js/*.js', '!js/modernizr.js', '!js/*.min.js', '!js/vendor/**/*.js'],
			options : {
				browser: true,
				curly: false,
				eqeqeq: false,
				eqnull: true,
				expr: true,
				immed: true,
				newcap: true,
				noarg: true,
				smarttabs: true,
				sub: true,
				undef: false
			}
		},

		// Uglify JavaScript
		uglify: {
			production: {
				files: {
					'dist/js/main.min.js': ['js/*.js', '!js/modernizr.js', '!js/*.min.js', '!js/vendor/**/*.js']
				}
			},
			dev: {
				options: {
					sourceMap: true,
					sourceMapName: 'dist/js/main.js.map'
				},
				files: {
					'dist/js/main.min.js': ['js/*.js', '!js/modernizr.js', '!js/*.min.js', '!js/vendor/**/*.js']
				}
			}
		},

		// Dev and production build for sass
		sass : {
			production : {
				files : [
					{
						src : ['**/*.scss', '!**/_*.scss'],
						cwd : 'scss',
						dest : 'dist/css',
						ext : '.min.css',
						expand : true
					}
				],
				options : {
					style : 'compressed'
				}
			},
			dev : {
				files : [
					{
						src : ['**/*.scss', '!**/_*.scss'],
						cwd : 'scss',
						dest : 'dist/css',
						ext : '.min.css',
						expand : true
					}
				],
				options : {
					style : 'expanded'
				}
			}
		},

		// Image min
		imagemin : {
			production : {
				files : [
					{
						expand: true,
						cwd: 'img',
						src: '**/*.{png,jpg,jpeg}',
						dest: 'dist/img'
					}
				]
			}
		},

		// SVG min
		svgmin: {
			production : {
				files: [
					{
						expand: true,
						cwd: 'images',
						src: '**/*.svg',
						dest: 'dist/img'
					}
				]
			}
		},

		// Clean
		clean: ['dist/']

	});

	// Default task
	grunt.registerTask('default', ['build:dev', 'watch']);

	// Build task
	grunt.registerTask('build', function() {
		return grunt.task.run([
			'clean',
			'jshint',
			'uglify:production',
			'sass:production',
			'imagemin:production',
			'svgmin:production'
		]);
	});

	grunt.registerTask('build:dev', function() {
		return grunt.task.run([
			'clean',
			'jshint',
			'uglify:dev',
			'sass:dev',
			'imagemin:production',
			'svgmin:production'
		]);
	})

	// Template Setup Task
	grunt.registerTask('setup', function() {
		var arr = [];

		arr.push('sass:dev');

		return grunt.task.run(arr);
	});

	// Load up tasks
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-svgmin');
};
