//包装函数
var HtmlWebpackPlugin=require('html-webpack-plugin')
module.exports = function(grunt) {
	// grunt.file.defaultEncoding = 'utf8';
	var _pkg= grunt.file.readJSON('package.json');
	// 任务配置
	grunt.initConfig({
		pkg: _pkg,

		/*less文件编译*/
		less: {
			development: {
				files:
					[{
						src: 'public/stylesheets/import_production.less',
						dest: 'dist/target/public/stylesheets/all.css'
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
					'dist/target/public/stylesheets/all.css': [
					'dist/target/public/stylesheets/all.css']
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
					cwd: 'dist/target/public/javascripts/app',
					src: '**/*bundle*.js',
					dest: 'dist/target/public/javascripts/app'
				}]
		     }
		},
		/*清除临时和编译目标文件夹*/
		clean: {
			dist: {
				src: ["dist"]
			},
			build:{
				src: ["public/index.html","public/javascripts/app/*bundle*.js"]
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
						{//引用压缩版本的样式
							match: new RegExp("<!--sourcecss begin-->([\\s\\S]*)<!--sourcecss end-->", "g"),
							replacement: '<link rel="stylesheet" type="text/css" href="stylesheets/all.css"/>'
						},
						{//开发环境参数
							match: new RegExp("#DEVELOPMENT#", "g"),
							replacement: ''
						},
						{//替换引用压缩版本的样式
							match: new RegExp("../fonts", "g"),
							replacement: '../javascripts/vendor/bootstrap/fonts'
						}
					]
				},
				files: [
					{expand: true, flatten: true, src: ['dist/target/public/index.html'], dest: 'dist/target/public'},
					{expand: true, flatten: true, src: ['dist/target/public/stylesheets/all.css'], dest: 'dist/target/public/stylesheets'}
				]
			}
		},
		/*资源文件拷贝*/
		copy: {
			main: {
				files: [
					/*{
						expand: true, src: ['public/javascripts/vendor/bootstrap/css/bootstrap.min.css'],
						dest: 'dist/target'
					},*/
					{
						expand: true, src: ['public/javascripts/vendor/bootstrap/fonts/**'],
						dest: 'dist/target'
					},
					{expand: true, src: ['public/images/**'], dest: 'dist/target'},
					{expand: true, src: ['bin/**'], dest: 'dist/target'},
					{expand: true, src: ['lib/**'], dest: 'dist/target'},
					{expand: true, src: ['package.json'], dest: 'dist/target'}]
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
						'dist/target/public/stylesheets/all.css'
					]
				}]
			}
		},
		/*HASH版本文件名自动替换*/
		usemin:{
			html: 'dist/target/public/index.html',
			options: {
				assetsDirs: ['dist/target/public']
			}
		},
		watch: {
			webpack:{
				files: [
					'public/javascripts/app.jsx',
					'public/javascripts/app/actions/**/*.js',
					'public/javascripts/app/components/**/*.jsx',
					'public/javascripts/app/stores/**/*.js',
					'public/javascripts/vendor/**/*.jsx',
					'public/javascripts/vendor/**/*.js'],
				tasks: ['clean:build','webpack:build'],
				options: {
					debounceDelay: 250
				}
			}
		},
		webpack: {
			build: {
				entry: [
					'./public/javascripts/app.jsx'
				],
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
						{test: /\.js$/,loaders: ['react-hot','babel?presets[]=es2015']},
						{test: /\.jsx$/,loaders: ['react-hot','babel?presets[]=es2015','jsx']}
					]
				},
				plugins:[
					new HtmlWebpackPlugin({
						title:_pkg.name,
						filename:'../../index.html',
						template:'public/tpl/index.ejs'
					})
				]
			},
			dist: {
				entry: [
					'./public/javascripts/app.jsx'
				],
				output: {
					publicPath: "javascripts/app/",
					path: './dist/target/public/javascripts/app',
					filename: 'bundle.[hash].js'
				},
				resolve: {
					extensions: ['','.js','.jsx','.less','.css']
				},
				module: {
					loaders: [
						{test: /\.js$/,loaders: ['react-hot','babel?presets[]=es2015']},
						{test: /\.jsx$/,loaders: ['react-hot','babel?presets[]=es2015','jsx']}
					]
				},
				plugins:[
					new HtmlWebpackPlugin({
						title:_pkg.name,
						filename:'../../index.html',
						template:'public/tpl/index.ejs'
					})
				]
			}
		},
		compress: {
			zip: {
				options: {
					archive: 'dist/fluxweb.zip',
					pretty: true,
					mode:"zip"
				},
				expand: true,
				cwd: 'dist/target',
				src: ['**/*'],
				dest: '/'
			},
			tgz: {
				options: {
					archive: 'dist/fluxweb.tar.gz',
					pretty: true,
					mode:"tgz"
				},
				expand: true,
				cwd: 'dist/target',
				src: ['**/*'],
				dest: '/'
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
	grunt.loadNpmTasks('grunt-contrib-compress');// 文件夹压缩工具
	grunt.loadNpmTasks('grunt-replace');// 替换工具
	grunt.loadNpmTasks('grunt-filerev');//哈希化
	grunt.loadNpmTasks('grunt-usemin');//哈希化
	grunt.loadNpmTasks('grunt-webpack');//模块化工具
	grunt.loadNpmTasks('grunt-css-import');
	// 注册任务
	grunt.registerTask("default", ['clean:build','webpack:build','watch']);
	grunt.registerTask("dist", ['clean:dist','webpack:dist','less','cssmin','copy','uglify','replace','filerev','usemin','compress:zip','compress:tgz']);//,'uglify','copy','less','cssmin','replace']);//['clean','less','cssmin','replace','browserify','uglify',"copy","filerev","usemin"]);
	grunt.registerTask("test", ['css_import']);
};