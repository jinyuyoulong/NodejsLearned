var fs = require('fs')

// create a read Stream(可读流)
var readerStream = fs.createReadStream('input.txt')

// create a write Stream
var writerStream = fs.createWriteStream('output.txt')

// pipe(管道) read and write operation（操作）
readerStream.pipe(writerStream)

console.log("程序执行完毕")