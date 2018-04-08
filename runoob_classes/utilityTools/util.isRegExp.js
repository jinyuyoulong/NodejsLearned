// util.isRegExp(object)
// 如果给定的参数 "object" 是一个正则表达式返回true，否则返回false。

var util = require('util')

function isTrue(bool) {
	if (bool) {
		 console.log('true')
	}else{
	 	console.log('false')
	}
}

isTrue(util.isRegExp('^2{13}'))
isTrue(util.isRegExp(new RegExp('^1')))
isTrue(util.isRegExp({}))