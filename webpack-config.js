var webpack=require('webpack');
var path=require('path');
var HtmlWebpackPlugin=require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
//var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: {
        app: './public/javascripts/app.jsx',
        vendor:[
            //'./public/javascripts/vendor/jquery/jquery-1.9.1.js',
            './public/javascripts/vendor/jquery/jquery.form.js',
            './public/javascripts/vendor/jquery/jquery.uploadPreview.min.js',
            './public/javascripts/vendor/jquery/jquery.i18n.properties-1.0.9.js',
            './public/javascripts/vendor/jquery/jquery-easyui-1.3.6/jquery.easyui.min.js',/*
            './public/javascripts/vendor/jquery/scrollbar/jquery.mousewheel.min.js',
            './public/javascripts/vendor/jquery/scrollbar/jquery.mCustomScrollbar.min.js'*/
            './node_modules/react',
            './node_modules/react-dom',
            './public/javascripts/util/FluxConstant',
            './public/javascripts/util/FluxUtil',
            './public/javascripts/util/DateUtil',
            './public/javascripts/components/bootstrap/Bootstrap'
            ]
    },
    output: {
        publicPath: "resources/",
        path: 'browser/resources/',
        filename: 'app.js'
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
                exclude: "node_modules"
            },
            {
                test: /\.jsx$/,
                loaders: ['react-hot','babel?presets[]=es2015','jsx'],
                exclude: "node_modules"
            },
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
            }/*,
            {
                test: /jquery-1\.9\.1\.js$/,
                loader: "expose?JQuery"
            }*/
        ]
    },
    plugins:[
        new CleanWebpackPlugin([
            "browser"
        ]),
        new HtmlWebpackPlugin({
            title:"fluxweb!wonderful web development framework",
            filename:'../index.html',
            template:'public/tpl/index.ejs',
            inject:'head'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name:"vendor",
            filename:"verdor.js"
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            "window.$": "jquery",
            React:"react",
            ReactDOM:"react-dom",
            Flux:path.resolve(__dirname, "./public/javascripts/util/FluxUtil"),
            FluxConstant:path.resolve(__dirname, "./public/javascripts/util/FluxConstant"),
            DateUtil:path.resolve(__dirname, "./public/javascripts/util/DateUtil"),
            BootstrapComp:path.resolve(__dirname, "./public/javascripts/components/bootstrap/Bootstrap")
        })/*,
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })*/
        //,new ExtractTextPlugin("[name].css")
    ]
};
