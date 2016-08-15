var superagent =  require('superagent')
var express = require('express')
var app = express()
var cheerio = require('cheerio')
var iconv = require('iconv-lite')
var fs = require('fs')

var headers = {
  'User-Agent' : 'Mozillz/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.65 Safari/537.36'

}
// 用 superagent 去抓取 https://cnodejs.org/ 的内容
superagent.get('http://www.biquge.tw/8_8002/4202629.html')
  .end(function (err, sres) {
    // 常规的错误处理
    if (err) {
      console.log('error:'+err)
      return ;
    }
    // sres.text 里面存储着网页的 html 内容，将它传给 cheerio.load 之后
    // 就可以得到一个实现了 jquery 接口的变量，我们习惯性地将它命名为 `$`
    // 剩下就都是 jquery 的内容了
    var html = iconv.decode(sres.text, 'utf8')
    // var $ = cheerio.load(html, {decodeEntities: true});
    // var contents = $('#contents' ,'.bdsub').text()
    // var writer = fs.createWriteStream('0.txt')
    // writer.write(contents,'utf8')
    // writer.end()
    console.log(html)
  });