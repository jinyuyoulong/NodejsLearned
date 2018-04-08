var util = require('util')

function Base() {
	this.name = 'base'
	this.base = 1988
	this.sayHello = function () {
		console.log('hello '+ this.name)
	}
}

Base.prototype.showName = function() {
	console.log(this.name)
};

function Sub() {
	this.name = 'Sub'
}

// 注意：Sub 仅仅继承了Base 在原型中定义的函数，而构造函数内部创造的 base 属 性和 sayHello 函数都没有被 Sub 继承。
// 同时，在原型中定义的属性不会被console.log 作 为对象的属性输出。如果我们去掉 objSub.sayHello(); 这行的注释，将会看到：
util.inherits(Sub, Base)

var objBase = new Base()
objBase.showName()
objBase.sayHello()
console.log(objBase)
console.log('####################')
var objSub = new Sub()
objSub.showName()
// objSub.sayHello()
console.log(objSub)