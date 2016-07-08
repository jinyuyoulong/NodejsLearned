function say(word){
	console.log(word)
}

function execute(someFun, value) {
	someFun(value)
}

// execute(say,'hello fans')// 一个函数可作为另一个函数的参数

execute(function (word) {console.log(word)}, "fans")// 使用匿名函数作为参数s
