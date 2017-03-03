// 解压

var fs = require('fs')
var zlib = require('zlib')

// decompress(解压缩) txt.gz文件为 txt 文件

fs.createReadStream('input.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('input.txt'))

 console.log('文件解压完成。')