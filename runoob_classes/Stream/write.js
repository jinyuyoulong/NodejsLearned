var fs = require('fs')

var data = '菜鸟教程官网地址：www.runoob.com'

var writerStream = fs.createWriteStream('output.txt')

// 使用 utf8 编码写入数据
writerStream.write(data, 'utf8')

// // 标记文件末尾
writerStream.end()

writerStream.on('finish', function () {
	console.log('写入完成。')
})

writerStream.on('error', function (error) {
	console.log(error.stack)
})

console.log('程序执行完毕！')
