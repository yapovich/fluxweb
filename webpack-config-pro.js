var webpack=require('webpack');
var path = require('path');
var HtmlWebpackPlugin=require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
//var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: {
        app: './browser/javascripts/app.jsx',
        vendor:[
            //'./browser/javascripts/vendor/jquery/jquery-1.9.1.js',
            './browser/javascripts/vendor/jquery/jquery.form.js',
            './browser/javascripts/vendor/jquery/jquery.uploadPreview.min.js',
            './browser/javascripts/vendor/jquery/jquery.i18n.properties-1.0.9.js',
            './browser/javascripts/vendor/jquery/jquery-easyui-1.3.6/jquery.easyui.min.js',/*
             './browser/javascripts/vendor/jquery/scrollbar/jquery.mousewheel.min.js',
             './browser/javascripts/vendor/jquery/scrollbar/jquery.mCustomScrollbar.min.js'*/
            './node_modules/react',
            './node_modules/react-dom',
            './browser/javascripts/util/FluxConstant',
            './browser/javascripts/util/FluxUtil',
            './browser/javascripts/util/DateUtil',
            './browser/javascripts/components/bootstrap/Bootstrap'
        ]
    },
    output: {
        publicPath: "resources/",
        path: 'dist/target/browser/resources/',
        filename: 'app.[hash].js'
    },
    resolve: {
        extensions: ['','.js','.jsx','.less','.css']/*,
        alias:{
            "jquery":path.resolve(__dirname, "./node_modules/jquery")
        }*/
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
            template:'browser/tpl/index_pro.ejs'
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
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            "window.$": "jquery",
            React:"react",
            ReactDOM:"react-dom",
            Flux:path.resolve(__dirname, "./browser/javascripts/util/FluxUtil"),
            FluxConstant:path.resolve(__dirname, "./browser/javascripts/util/FluxConstant"),
            DateUtil:path.resolve(__dirname, "./browser/javascripts/util/DateUtil"),
            BootstrapComp:path.resolve(__dirname, "./browser/javascripts/components/bootstrap/Bootstrap")
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new CopyWebpackPlugin([
            {from: 'server/bin',to: '../../bin'},
            {from: 'server/lib',to: '../../lib'},
            {from: 'server/tpl',to: '../../tpl'},
            {from: 'server/package.json',to: '../../package.json'}
        ])
        //,new ExtractTextPlugin("[name].css")
    ]
};
