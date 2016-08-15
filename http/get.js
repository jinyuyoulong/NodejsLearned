var http = require('http')
var url = require('url')
var util = require('util')

http.createServer(function (req, res) {
	res.writeHead(200,{'Content-Type':'text/plain'})
	// 打印 util 的属性信息
	res.end(util.inspect(url.parse(req.url, true)))
}).listen(3000)