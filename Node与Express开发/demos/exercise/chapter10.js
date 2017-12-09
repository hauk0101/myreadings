//第十章 中间件

var app = require('express')();

app.use(function (req, res, next) {
    console.log('\n\nALLWAYS');
    next();
});

app.get('/a', function (req, res) {
    console.log('/a: 路由终止');
    res.send('a');
});

app.get('/a', function (req, res) {
    console.log('/a: 永远不会被调用');
});

app.get('/b', function (req, res,next) {
    console.log('/b: 路由未終止');
    next();
});

//需要注意一点的是，因为在调用了send后，调用了next()，所以后续的中间件依旧可以继续执行
// app.get('/b',function(req,res,next){
//     console.log('/b: 路由未終止');
//     res.send('b');
//     next();
// });

app.use(function (req, res, next) {
    console.log('SOMETIMES');
    next();
});

app.get('/b', function ( req, res, next) {

    console.log('/b (part 2): 抛出错误');
    throw new Error('b 失败 ');
});

app.use('/b', function (err, req, res, next) {
    console.log('/b 检测到错误并传递:',err);
    next(err);
});

app.get('/c', function (err, req) {
    console.log('/c: 抛出错误');
    throw new Error('c 失败');
});

app.use('/c', function (err, req, res, next) {
    console.log('/c: 检测到错误但不传递');
    next();
});

app.use(function (err, req, res, next) {
    console.log('检测到未处理的错误：' + err.message);
    res.send('500 - 服务器错误');
});

app.use(function (req, res) {
    console.log('未处理的路由');
    res.send('404 - 未找到');
})




app.listen(3000, function () {
    console.log('监听端口 3000');
})