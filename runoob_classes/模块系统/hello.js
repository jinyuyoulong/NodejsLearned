exports.world = function () {
	console.log('Hello - world')
}

//hello.js 通过 exports 对象把 world 作为模块的访问接口，

//在 main.js 中通过 require('./hello') 加载这个模块，
//然后就可以直接访 问 hello.js 中 exports 对象的成员函数了。

// 2. 将对象封装进去

function Hello() {
	var name
	
	this.setName = function (theName) {
		name = theName
	}

	this.sayhello = function () {
		console.log("Hello " + name)
	}
}
module.exports = Hello
// 这样就可以获取整个对象