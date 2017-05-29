var webpack = require('webpack');
var path = require('path');                 //引入node的path库
var HtmlwebpackPlugin = require('html-webpack-plugin');

var config = {
    entry: './app/index.jsx',
    output: {
        path: path.resolve(__dirname, './../build/'+__dirname.split('\\').pop()),
        publicPath: '',
        filename: 'bundle.js'
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
        new webpack.HotModuleReplacementPlugin(),
        new HtmlwebpackPlugin({
            title: 'React '+ __dirname.split('\\').pop()
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        })
    ]
};

module.exports = config;