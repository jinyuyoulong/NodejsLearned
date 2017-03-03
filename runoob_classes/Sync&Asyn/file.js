var fs = require('fs')

//异步读取
fs.readFile('input.txt', function (err, data) {
	if (err) {
		return console.error('err')
	}
	console.log("异步读取:"+data.toString())
})

var data = fs.readFileSync('input.txt')
console.log("同步读取:"+data.toString())


var fs = require("fs");

// 异步打开文件
console.log("准备打开文件！");
fs.open('input.txt', 'r+', function(err, fd) {
   if (err) {
       return console.error(err);
   }
  console.log("文件打开成功！");     
});

console.log("exit")
