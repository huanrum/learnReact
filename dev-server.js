// 引入必要的模块
var path = require('path');
var express = require('express')
var webpack = require('webpack')
var child_process = require('child_process');
var middleware = require('webpack-dev-middleware')

var config = require('./webpack.config')

// 创建一个express实例
var app = express()

// 调用webpack并把配置传递过去
// 使用 webpack-dev-middleware 中间件
var devMiddleware = middleware(webpack(config), {
    publicPath: config.output.publicPath,
    stats: {
        colors: true,
        chunks: false
    }
})

// 注册中间件
app.use(devMiddleware);

(function (createServer) {
    // 监听 8801端口，开启服务器
    child_process.exec(process.platform == 'win32' ? 'netstat -aon' : 'netstat –apn', function (err, stdout, stderr) {
        var port = 8801, count = 0, thenList = [];
        if (err) { return console.log(err); }
        stdout.split('\n').filter(function (line) { return line.trim().split(/\s+/).length > 4; }).forEach(function (line) {
            var p = line.trim().split(/\s+/);
            if (process.platform == 'win32') {
                p.splice(1, 0, "0");
            }
            if (p[2].split(':')[1] == port || p[3].split(':')[1] == port) {
                ++count;
                child_process.exec('taskkill /pid ' + p[5].split('/')[0] + ' -t -f ', function (err, stdout, stderr) {
                    createServer(port, --count);
                });
            }
        });
        createServer(port, count);
    });
})(function (port, count) {
    if (count) { return; }

    app.listen(port, function (err) {
        if (err) {
            console.log(err)
            return
        }
        console.log('\nListening at http://localhost:' + port)
    })
});
