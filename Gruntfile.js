//包装函数
var HtmlWebpackPlugin=require('html-webpack-plugin')
module.exports = function(grunt) {
	// grunt.file.defaultEncoding = 'utf8';
	var _pkg= grunt.file.readJSON('package.json');
	// 任务配置
	grunt.initConfig({
		pkg: _pkg,
		/*命令行执行*/
		exec: {
			webpackConfig: 'webpack --config webpack-config --watch',
			webpackConfigPro: 'webpack --config webpack-config-pro'
		},
		/*清除临时和编译目标文件夹*/
		clean: {
			dist: {
				src: ["dist/fluxweb.zip","dist/fluxweb.tar.gz",]
			},
			options: {
				force: true
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
	grunt.loadNpmTasks('grunt-exec');//命令行执行工具
    grunt.loadNpmTasks('grunt-contrib-clean');//清除工具
	grunt.loadNpmTasks('grunt-contrib-compress');// 文件夹压缩工具
	// 注册任务
	grunt.registerTask("default", ['exec:webpackConfig']);
	grunt.registerTask("dist", ['exec:webpackConfigPro','clean:dist','compress:zip','compress:tgz']);//,'uglify','copy','less','cssmin','replace']);//['clean','less','cssmin','replace','browserify','uglify',"copy","filerev","usemin"]);
};