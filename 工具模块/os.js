var os = require('os')

// CPU的字节序
console.log('endianness: '+os.endianness())

// 操作系统的type
console.log('type: '+os.type())

// os platform
console.log('platform '+ os.platform())

// total memory 系统内存总量
console.log('total memory: '+ os.totalmem() + ' bytes.')

// free memory 操作系统空闲内存量
console.log('free memory '+os.freemem()+' bytes.')