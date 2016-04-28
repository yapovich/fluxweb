var webpack=require('webpack');
var path=require('path');
var HtmlWebpackPlugin=require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
//var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpackconfig = {
    entry: {
        vendor:[
            //'./browser/javascripts/vendor/jquery/jquery-1.9.1.js',
            './browser/javascripts/vendor/jquery/jquery.form.js',
            './browser/javascripts/vendor/jquery/jquery.uploadPreview.min.js',
            './browser/javascripts/vendor/jquery/jquery.i18n.properties-1.0.9.js',
            './browser/javascripts/vendor/jquery/jquery-easyui-1.3.6/jquery.easyui.min.js',/*
            './browser/javascripts/vendor/jquery/scrollbar/jquery.mousewheel.min.js',
            './browser/javascripts/vendor/jquery/scrollbar/jquery.mCustomScrollbar.min.js'*/
            //'./browser/javascripts/vendor/bootstrap/js/bootstrap.js',
            './browser/javascripts/vendor/flatui/js/flat-ui.js',
            './node_modules/react',
            './node_modules/react-dom',
            './browser/javascripts/entitys/HashMap',
            './browser/javascripts/utils/FluxConstant',
            './browser/javascripts/utils/FluxUtil',
            './browser/javascripts/utils/DateUtil',
            './browser/javascripts/components/Components'
            ]
    },
    output: {
        publicPath: "resources/",
        path: 'server/public/resources/',
        filename: '[name].js'
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
            "server/public"
        ]),
        /*new HtmlWebpackPlugin({
            title:"fluxweb!wonderful web development framework",
            filename:'../index.html',
            template:'browser/tpl/index.ejs',
            inject:'body'
        }),*/
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
            HashMap:path.resolve(__dirname, "./browser/javascripts/entitys/HashMap"),
            Flux:path.resolve(__dirname, "./browser/javascripts/utils/FluxUtil"),
            FluxConstant:path.resolve(__dirname, "./browser/javascripts/utils/FluxConstant"),
            DateUtil:path.resolve(__dirname, "./browser/javascripts/utils/DateUtil"),
            Comp:path.resolve(__dirname, "./browser/javascripts/components/Components")
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
        //,new ExtractTextPlugin("[name].css")
    ]
};
var createApplication=function(filename,chunkName,entryPath){
    webpackconfig.entry[chunkName]=entryPath;
    var plugin=new HtmlWebpackPlugin({
        title:"fluxweb!wonderful web development framework",
        filename:'../'+filename,
        template:'browser/tpl/index.ejs',
        inject:'body',
        chunks: ['vendor', chunkName]
    });
    webpackconfig.plugins.push(plugin);
}
createApplication("index.html","index","./browser/javascripts/pages/index.jsx");
createApplication("components.html","components","./browser/javascripts/pages/components.jsx");
module.exports=webpackconfig;