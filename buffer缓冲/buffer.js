// // 1. 10字节
// var buf = new Buffer(10)

// // 2. 通过给定的数组创建 Buffer 实例：
// var buf = new Buffer[10, 20, 30 40, 50]

// // 3. 通过一个字符串来创建 Buffer 实例：
// //  	utf-8 是默认的编码方式，此外它同样支持以下编码："ascii", "utf8", "utf16le", "ucs2", "base64" 和 "hex"。
// var buf = new Buffer("fanyiqing",'utf-8')

// // 写入缓冲区 
// // 返回实际写入的大小。如果 buffer 空间不足， 则只会写入部分字符串。
// buf.write(string[, offset[, length]][, encoding])

// buf  = new Buffer(256)
// len = buf.write('www.fanyiqing.com')

// console.log('写入字节数：' + len)

// buf = new Buffer(26)

// for (var i = 0; i < 26; i++) {
// 	buf[i] = i+97
// }

// console.log(buf.toString('ascii'))
// console.log(buf.toString('ascii', 0,5))
// console.log(buf.toString('utf8', 0, 5))
// console.log(buf.toString(undefined, 0, 5))

// 合并缓冲区
var buffer1 = new Buffer('菜鸟教程')
var buffer2 = new Buffer('www.runoob.com')
var buffer3 = Buffer.concat([buffer1, buffer2])
console.log("buffer3内容："+buffer3.toString())
console.log('buffer3 length:' + buffer3.length)