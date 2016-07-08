// 引入events模块
var events = require('events')

// 创建event emitter(发射者) 对象
var eventEmitter = new events.EventEmitter()

var connectHandler = function connected() {
	console.log('链接成功')
	eventEmitter.emit('data_received')
}
// 绑定事件
eventEmitter.on('connection', connectHandler)
// 使用匿名函数绑定
eventEmitter.on('data_received', function () {
	console.log('数据接收成功')
})

// 触发事件
eventEmitter.emit('connection')

console.log('程序执行完毕！')