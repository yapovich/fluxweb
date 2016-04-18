var webpack=require('webpack');
var HtmlWebpackPlugin=require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
//var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: {
        app: './public/javascripts/app.jsx',
        vendor:[
            './public/javascripts/vendor/jquery/jquery-1.9.1']
    },
    output: {
        publicPath: "bundle/",
        path: 'public/bundle/',
        filename: 'app.js'
    },
    resolve: {
        extensions: ['','.js','.jsx','.less','.css']
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
            "public/index.html",
            "public/bundle"
        ]),
        new HtmlWebpackPlugin({
            title:"fluxweb!wonderful web development framework",
            filename:'../index.html',
            template:'public/tpl/index.ejs'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name:"vendor",
            filename:"verdor.js"
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
        //,new ExtractTextPlugin("[name].css")
    ]
};
