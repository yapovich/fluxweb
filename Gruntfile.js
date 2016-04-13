//包装函数
module.exports = function(grunt) {
	// grunt.file.defaultEncoding = 'utf8';
	// 任务配置
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		/*less文件编译*/
		less: {
			development: {
				files: {
					"public/stylesheets/css/index.css": "public/stylesheets/less/index.less"
				}
			}
		},
		/*css压缩及合并*/
		cssmin: {
			options: {
				shorthandCompacting: false,
				roundingPrecision: -1
			},
			target: {
				files: {
					'dist/public/stylesheets/css/all.css': [
						'public/stylesheets/**/**.css']
				}
			}
		},
		/*js压缩*/
		uglify: {
			options: {
				mangle: false//如果是js的压缩，此变量设置是否混淆函数和变量名称
			},
			my_target: {
				files: {
					'dist/public/javascripts/bundle.min.js': ['public/javascripts/bundle.js']
				}
			}
		},
		/*js合并*/
		concat: {
			options: {
				stripBanners: true,
				banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
				'<%= grunt.template.today("yyyy-mm-dd") %> */',
			},
			dist: {
				files: {
					'public/javascripts/all.js': ['public/javascripts/bundle.min.js']
				}
			}
		},
		/*清除临时和编译目标文件夹*/
		clean: {
			build: {
				src: ["dist"]
			},
			options: {
				force: true
			}
		},
		/*替换文本*/
		replace: {
			dist: {
				options: {
					patterns: [
						{//替换引用压缩版本的脚本
							match: new RegExp("<!--sourcejs begin-->([\\s\\S]*)<!--sourcejs end-->", "g"),
							replacement: '<script type="text/javascript" src="javascripts/bundle.min.js"></script>'
						},
						{//替换引用压缩版本的样式
							match: new RegExp("<!--sourcecss begin-->([\\s\\S]*)<!--sourcecss end-->", "g"),
							replacement: '<link rel="stylesheet" type="text/css" href="stylesheets/css/all.css"/>'
						}
					]
				},
				files: [
					{expand: true, flatten: true, src: ['public/index.html'], dest: 'dist/public'}
				]
			}
		},
		/*资源文件拷贝*/
		copy: {
			main: {
				files: [
					{
						expand: true, src: ['public/javascripts/vendor/bootstrap/css/bootstrap.min.css'],
						dest: 'dist'
					},
					{
						expand: true, src: ['public/javascripts/vendor/bootstrap/fonts/**'],
						dest: 'dist'
					},
					{expand: true, src: ['public/images/**'], dest: 'dist'}]
			}
		},
		browserify: {
			options: {
				transform: [require('grunt-react').browserify]
			},
			app: {
				src: 'public/javascripts/app.js',
				dest: 'public/javascripts/bundle.js'
			}
		},
		watch: {
			browserify:{
				files: [
					'public/javascripts/app.js',
					'public/javascripts/actions/**/*.js',
					'public/javascripts/components/**/*.js',
					'public/javascripts/stores/**/*.js'],
				tasks: ['browserify'],
				options: {
					debounceDelay: 250
				}
			}
		}
	});
	// 告诉grunt我们将使用插件
	grunt.loadNpmTasks('grunt-contrib-watch');// watch监听工具
	grunt.loadNpmTasks('grunt-contrib-less');// less工具
	grunt.loadNpmTasks('grunt-contrib-cssmin');// css压缩及合并工具
	grunt.loadNpmTasks('grunt-contrib-concat');// js合并工具
	grunt.loadNpmTasks('grunt-contrib-uglify');// js压缩工具
	grunt.loadNpmTasks('grunt-contrib-clean');// 清除工具
	grunt.loadNpmTasks('grunt-contrib-copy');// 拷贝工具
	grunt.loadNpmTasks('grunt-replace');// 替换工具
	grunt.loadNpmTasks('grunt-react');//react语法解析工具
	grunt.loadNpmTasks('grunt-browserify');//require模块化工具
	// 注册任务
	grunt.registerTask("default", ['clean','less','cssmin','replace','browserify','uglify',"copy"]);
	grunt.registerTask("monitor", ['browserify','watch']);
};