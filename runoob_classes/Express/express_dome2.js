// 路由
var express = require('express')
var app = express()

// 主页输出 "Hello World"
app.get('/', function (req, res) {
	console.log('主页 GET 请求 Hello fans')
	res.send('Hello GET')
})

// POST 请求
app.post('/', function (req, res) {
	console.log('POST request')
	res.send('Hello POST')
})

// /del_user 页面相应
app.delete('/del_user', function (req, res) {
	console.log('/del_user 相应 delete 请求')
	res.send('删除页面')
})

//  /list_user 页面 GET 请求
app.get('/list_user', function (req, res) {
	console.log('/del_user 页面请求')
	res.send('用户列表页面')
})

// 对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
app.get('/ab*cd', function (req, res) {
	console.log('/ab*cd GET 请求')
	res.send('正则匹配')
})

var server = app.listen(8081, function () {
	var host = server.address().address
	var port = server.address().port

	console.log('应用实例，访问地址为 http://%s:%s',host, port)
})