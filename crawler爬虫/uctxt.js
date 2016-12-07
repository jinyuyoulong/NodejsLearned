var http = require("http"),
	url = require('url'),
	superagent = require("superagent"),
	cheerio = require("cheerio"),
	async = require("async"),
	eventproxy = require("eventproxy");
var ep = new eventproxy(),
	urls = ["http://www.uctxt.com/book/17/17785/4608672.html"],
	pageURLs = [],
	pageNum = 1;

// function start() {
	function onRequest(request, response) {
		pageURLs.forEach(function (pageURL) {
			superagent.get(pageURL)
			.end(function (error, pres) {
				if (error) {return next(error)}
				// pres.text 里面存储着请求返回的 html 内容，将它传给 cheerio.load 之后
              // 就可以得到一个实现了 jquery 接口的变量，我们习惯性地将它命名为 `$`
              // 剩下就都是利用$ 使用 jquery 的语法了
              var $ = cheerio.load(pres.text)
              var title = $('.BookTitle')
              
			})
		})
		response.write("<br/>")
		response.write()

	}

	http.createServer(onRequest).listen(3000)
// }
