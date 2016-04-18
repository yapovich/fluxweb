var webpack=require('webpack');
var path = require('path');
var HtmlWebpackPlugin=require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
//var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: {
        app: './public/javascripts/app.jsx',
        vendor:[
            './public/javascripts/vendor/jquery/jquery-1.9.1.js',
            './public/javascripts/vendor/jquery/jquery.form.js',
            './public/javascripts/vendor/jquery/jquery.uploadPreview.min.js',
            './public/javascripts/vendor/jquery/jquery.i18n.properties-1.0.9.js',
            './public/javascripts/vendor/jquery/jquery-easyui-1.3.6/jquery.easyui.min.js',
            './public/javascripts/vendor/jquery/scrollbar/jquery.mCustomScrollbar.concat.min.js']
    },
    output: {
        publicPath: "bundle/",
        path: 'dist/target/public/bundle/',
        filename: 'bundle.[hash].js'
    },
    resolve: {
        extensions: ['','.js','.jsx','.less','.css'],
        alias:{
            jquery:path.join(__dirname, '/public/javascripts/vendor/jquery/jquery-1.9.1.js')
        }
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot','babel?presets[]=es2015'],
                exclude: "node_modules"},
            {
                test: /\.jsx$/,
                loaders: ['react-hot','babel?presets[]=es2015','jsx'],
                exclude: "node_modules"},
            {
                test: /\.less$/,
                loaders: ['style','css','less'],
                //loader:ExtractTextPlugin.extract("style-loader", "css-loader"),
                exclude: "node_modules"
            },
            {
                test: /\.css/,
                loaders: ['style','css'],
                exclude: "node_modules"
            },
            {
                test:/\.(jpg|jpeg|gif|png|woff|svg|ttf|eot)$/,
                loader:'url-loader?limit=10240',
                exclude: "node_modules"
            }//限制大小小于10k的
        ]
    },
    plugins:[
        new CleanWebpackPlugin([
            "dist"
        ]),
        new HtmlWebpackPlugin({
            title:"fluxweb!wonderful web development framework",
            filename:'../index.html',
            template:'public/tpl/index_pro.ejs'
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name:"vendor",
            filename:"verdor.[hash].js"
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new CopyWebpackPlugin([
            {from: 'bin',to: '../../bin'},
            {from: 'lib',to: '../../lib'},
            {from: 'package.json',to: '../../package.json'}
        ])
        //,new ExtractTextPlugin("[name].css")
    ]
};
