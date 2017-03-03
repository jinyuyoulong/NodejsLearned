//从流中读取数据 //写入流

var fs = require('fs')

var data = ''

//创建可读流
var readerStream = fs.createReadStream('input.txt')

readerStream.setEncoding('UTF8')

// 处理流事件 --> data, end, and error
readerStream.on('data', function (chuck) {
	data += chuck
})

readerStream.on('end', function () {
	console.log(data)
})

readerStream.on('error', function (err) {
	console.log(err.stack)
})

console.log('exe end and exit')