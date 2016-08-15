var express = require('express')
var app = express()

app.get('/test', function (req, res) {
	var name = req.query.name
	console.log(name)
	res.end(name)
})

var server =  app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
})