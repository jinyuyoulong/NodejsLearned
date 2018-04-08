var express = require('express')
var app = express()
var routes = require('./routes')(app)

// 打开当前目录的public子目录（严格来说，是打开public目录的index.html文件）。
//如果public目录之中有一个图片文件my_image.png，那么可以用http://localhost:8080/my_image.png访问该文件。
app.use(express.static(__dirname + './public'))
app.use(favicon(__dirname + './public/favicon.ico'))

// set方法用于指定变量的值。
app.set("views", __dirname + "./views")
app.set("view engine", "jade")

app.listen(3000)