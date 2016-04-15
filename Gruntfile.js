//包装函数
module.exports = function(grunt) {
	// grunt.file.defaultEncoding = 'utf8';
	// 任务配置
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		/*less文件编译*/
		less: {
			development: {
				files:
					[{
						src: 'public/stylesheets/**/*.less',
						dest: 'dist/public/stylesheets/all.css'
					}]
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
					'dist/public/stylesheets/all.css': [
					'dist/public/stylesheets/all.css']
				}
			}
		},
		/*js压缩*/
		uglify: {
			options: {
				mangle: false//如果是js的压缩，此变量设置是否混淆函数和变量名称
			},
			my_target: {
				files:[{
					expand: true,
					cwd: 'dist/public/javascripts/app',
					src: '**/*bundle.js',
					dest: 'dist/public/javascripts/app'
				}]
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
							replacement: '<script type="text/javascript" src="javascripts/app/bundle.js"></script>'
						},
						{//替换引用压缩版本的样式
							match: new RegExp("<!--sourcecss begin-->([\\s\\S]*)<!--sourcecss end-->", "g"),
							replacement: '<link rel="stylesheet" type="text/css" href="stylesheets/all.css"/>'
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
						expand: true, src: ['public/javascripts/app/*bundle.js'],
						dest: 'dist'
					},
					{
						expand: true, src: ['public/javascripts/vendor/bootstrap/css/bootstrap.min.css'],
						dest: 'dist'
					},
					{
						expand: true, src: ['public/javascripts/vendor/bootstrap/fonts/**'],
						dest: 'dist'
					},
					{expand: true, src: ['public/images/**'], dest: 'dist'},
					{expand: true, src: ['bin/**'], dest: 'dist'},
					{expand: true, src: ['lib/**'], dest: 'dist'}]
			}
		},
		/*哈希命名*/
		filerev: {
			options: {
				encoding: 'utf8',
				algorithm: 'md5',
				length: 20/*,
				process: function(basename, name, extension){
					var hash=function(name,algorithm){
						var crypto=require("crypto")
						var hash = crypto.createHash(algorithm);
						hash.update(name, "utf8");
						return hash.digest("hex").slice(0, 16);
					}
					var resultname=hash(basename+new Date(),"md5");
                    return basename+"."+resultname+"."+extension;
	            }*/
			},
			assets: {
				files: [{
					src: [
						'dist/public/stylesheets/all.css'
					]
				}]
			}
		},
		/*HASH版本文件名自动替换*/
		usemin:{
			html: 'dist/public/index.html',
			options: {
				assetsDirs: ['dist/public']
			}
		},
		watch: {
			webpack:{
				files: [
					'public/javascripts/app.jsx',
					'public/javascripts/app/**/*.jsx',
					'public/javascripts/app/**/*.js'],
				tasks: ['webpack'],
				options: {
					debounceDelay: 250
				}
			}
		},
		webpack: {
			target: {
				entry: {
					app: './public/javascripts/app.jsx'
				},
				output: {
					publicPath: "javascripts/app/",
					path: './public/javascripts/app',
					filename: 'bundle.js'
				},
				resolve: {
					extensions: ['','.js','.jsx','.less','.css']
				},
				module: {
					loaders: [
						{test: /\.js$/,loader: 'babel?presets[]=es2015'},
						{test: /\.jsx$/,loader: 'babel?presets[]=es2015!jsx'}
					]
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
	grunt.loadNpmTasks('grunt-filerev');//哈希化
	grunt.loadNpmTasks('grunt-usemin');//哈希化
	grunt.loadNpmTasks('grunt-webpack');//模块化工具
	// 注册任务
	grunt.registerTask("default", ['clean','webpack','less','cssmin','copy','uglify','replace']);//,'uglify','copy','less','cssmin','replace']);//['clean','less','cssmin','replace','browserify','uglify',"copy","filerev","usemin"]);
	grunt.registerTask("monitor", ['webpack','watch']);
};