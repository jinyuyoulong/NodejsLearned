// util.isDate(object)
// 如果给定的参数 "object" 是一个日期返回true，否则返回false。
var util = require('util')

function isTrue(bool) {
	if (bool) {
		 console.log('true')
	}else{
	 	console.log('false')
	}
}
util.isDate(new Date())
  // true
util.isDate(Date())
  // false (without 'new' returns a String)
util.isDate({})
  // false
isTrue(util.isDate(new Date()))
isTrue(util.isDate(Date()))
isTrue(util.isDate({}))