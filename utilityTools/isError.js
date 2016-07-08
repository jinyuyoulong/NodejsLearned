// util.isError(object)
// 如果给定的参数 "object" 是一个错误对象返回true，否则返回false。

var util = require('util')

function isTrue(bool) {
	if (bool) {
		 console.log('true')
	}else{
	 	console.log('false')
	}
}

util.isError(new Error())
  // true
util.isError(new TypeError())
  // true
util.isError({ name: 'Error', message: 'an error occurred' })
  // false

isTrue(util.isError(new Error()))

isTrue(util.isError(new TypeError()))

isTrue(util.isError({name:'Error', message:'an error occurred'}))