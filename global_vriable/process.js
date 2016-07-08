process.on('exit', function (code) {
	setTimeout(function () {
		console.log('naver excute永远不会执行')
	}, 0)

	console.log('exit code is : ',code)
})

console.log('程序执行结束')