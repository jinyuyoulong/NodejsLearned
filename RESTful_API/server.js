var express = require('express')
var app = express()
var fs = require('fs')


app.get('/listUsers', function (req, res) {
	fs.readFile(__dirname + '/' + 'users.json', 'utf8', function (err, data) {
		// console.log(data)
		res.end(data)
	})
})

//添加的新用户数据
var user = {
   "user4" : {
      "name" : "mohit",
      "password" : "password4",
      "profession" : "teacher",
      "id": 4
   }
}

app.get('/addUser', function (req, res) {
	fs.readFile(__dirname + '/' + 'users.json', 'utf8', function (err, data) {
		data = JSON.parse(data)
		data['user4'] = user['user4']
		
		// console.log(data)
		
		// var writeStream = fs.createWriteStream('users.json');
		// writeStream.write(data, 'utf8')
		// writeStream.end()
		// writeStream.on('error', function (err) {
		// 	console.log(err)
		// })
		// writeStream.on('finish', function () {
		// })
		res.end(JSON.stringify(data))
	})
})

// 显示用户详情
app.get('/:id', function (req, res) {
	// // 首先我们读取已存在的用户
	fs.readFile(__dirname + '/' + 'users.json', function (err, data) {
		data = JSON.parse(data)
		var user = data["user"+ req.params.id] // key值 字符串拼接
		console.log(req.params.id)
		res.end(JSON.stringify(user))
	})
})

app.get('/para', function (req, res) {
	
	if (req.url !== "/favicon.ico") {
		console.log(req.query.name)
		console.log(req.query.age)
	}
	res.end("para")
})
// delete 删除用户 另起文件，此文件下不能访问到资源
var id = 2;
/*
app.get('/deleteUser', function (req, res) {
	// First read existing users.
	fs.readFile(__dirname + '/' + 'users.json', 'utf8', function (err, data) {

		data = JSON.parse(data)
		delete data["user"+2]

		console.log(data)
		res.end(JSON.stringify(data))
	})
})
*/




var server = app.listen(8081, function () {
	var host = server.address().address
	var port = server.address().port
	console.log("应用实例，访问地址为 http://%s:%s", host, port)
})