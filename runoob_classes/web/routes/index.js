module.exports = function (app) {
	//动态网页
	//启动脚本index.js的app.get方法，用于指定不同的访问路径所对应的回调函数，这叫做“路由”（routing）
	app.all('*',function (req,res,next) {
		res.writeHead(200,{'Content-Type':'	text/plain'})
		next()
	})
	app.get("/send", function (req,res) {
		res.end("i am response send data")
	})

	app.get('/list', function (req, res)	 {
		res.end('I am list')
	})
	app.get('*', function (req, res) {
		res.end('404!')
	})
}