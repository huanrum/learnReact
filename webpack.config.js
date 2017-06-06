//var webpack = require('webpack');
var path = require('path');                 //引入node的path库
//var HtmlwebpackPlugin = require('html-webpack-plugin');

var config = {
    entry: './app/index.jsx',
    output: {
        path: path.resolve(__dirname, './../build/'+__dirname.split('\\').pop()),
        publicPath: '',
        filename: 'bundle.js'
    },
     resolve: {
        extensions: ['.vue','.ts','.jsx', '.js']
    },
    module: {
        loaders: [
            // 为webpack指定loaders
            {
                test: /\.js$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.less$/,//正则匹配拓展名为···的文件
                include: path.join(__dirname, './app'),//需要被加载文件的路径
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015','stage-2']
                }
            }
        ]
    },
    plugins: [
        // new HtmlwebpackPlugin({
        //     filename: 'index.html',
        //     title: 'React '+ __dirname.split('\\').pop(),
        //     template: path.resolve(__dirname, 'index.html'),
        //     inject: true
        // })
    ],
    devtool: '#eval-source-map'
};

module.exports = config;