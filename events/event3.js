// addListener(event, listener)
// 为指定事件添加一个监听器到监听器数组的尾部。
// 2	on(event, listener)
// 为指定事件注册一个监听器，接受一个字符串 event 和一个回调函数。
// server.on('connection', function (stream) {
//   console.log('someone connected!');
// });
// 3	once(event, listener)
// 为指定事件注册一个单次监听器，即 监听器最多只会触发一次，触发后立刻解除该监听器。
// server.once('connection', function (stream) {
//   console.log('Ah, we have our first user!');
// });
// 4	removeListener(event, listener)
// 移除指定事件的某个监听器，监听器 必须是该事件已经注册过的监听器。
// var callback = function(stream) {
//   console.log('someone connected!');
// };
// server.on('connection', callback);
// // ...
// server.removeListener('connection', callback);
// 5	removeAllListeners([event])
// 移除所有事件的所有监听器， 如果指定事件，则移除指定事件的所有监听器。
// 6	setMaxListeners(n)
// 默认情况下， EventEmitters 如果你添加的监听器超过 10 个就会输出警告信息。 setMaxListeners 函数用于提高监听器的默认限制的数量。
// 7	listeners(event)
// 返回指定事件的监听器数组。
// 8	emit(event, [arg1], [arg2], [...])
// 按参数的顺序执行每个监听器，如果事件有注册监听返回 true，否则返回 false。

// class 方法
// listenerCount(emitter, event)

var events = require('events')

var emitter = new events.EventEmitter()

// listener1
var listener1 = function listener1() {
	console.log('监听器 listener1 触发')
}

// listener2
var listener2 = function listener2() {
	console.log('监听器 listener2 触发')
}

// 绑定connect事件， 处理函数为 listener1
emitter.on('connection', listener1)

// 绑定connect事件， 处理函数为 listener2
emitter.on('connection', listener2)

var Listeners = events.EventEmitter.listenerCount(emitter, 'connection')
console.log(Listeners + "个监听器监听连接事件")

emitter.emit('connection')

// 移除监听者
emitter.removeListener('connection',listener1)
console.log('listener1 不在受监听')

emitter.emit('connection')

Listeners = events.EventEmitter.listenerCount(emitter, 'connection')
console.log(Listeners + '个监听器监听连接事件')

console.log('程序结束.')




