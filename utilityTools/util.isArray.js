// util.isArray(object)
// 如果给定的参数 "object" 是一个数组返回true，否则返回false。
var util = require('util')

function isTrue(bool) {
	if (bool) {
		 console.log('true')
	}else{
	 	console.log('false')
	}
}

isTrue(util.isArray([]))
isTrue(util.isArray(new Array))
isTrue(util.isArray({}))