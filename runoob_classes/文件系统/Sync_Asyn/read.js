// fs.read(fd, buffer, offset, length, position, callback)
var fs = require("fs");
var buf = new Buffer(1024)

console.log("准备打开已存在的文件！");
fs.open('input.txt', 'r+', function (err, fd) {
	if (err) {return console.log(err)}

	console.log('file open success')
	console.log('ready to read file')

	fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
		if (err) {return console.log(err)}

		console.log(bytes+"bytes was readed")
	// output readed bytes
	if (bytes>0) {console.log(buf.slice(0, bytes).toString())}
	})
})