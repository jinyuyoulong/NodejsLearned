// console.log(__filename)
// console.log(__dirname)

function printHello() {
	console.log("hello, fans")
	console.trace()
}

var t = setTimeout(printHello, 2000)
// var t = setInterval(printHello, 2000)

// setTimeout(clearInterval(t), 5000)
