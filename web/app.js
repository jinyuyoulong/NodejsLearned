var express = require('express')
var bodyParser = require('body-parser')
var methodOverride = require('method-override')
var favicon = require('serve-favicon');
var logger = require('morgan')
var app = express()
var routes = require('./routes')(app)

// 设定port变量，意为访问端口
app.set('port', process.env.PORT || 3000)
// 设定views变量，意为视图存放的目录
app.set('views', __dirname + '/views')
// 设定view engine变量，意为网页模板引擎
app.set('view engine', 'jade')

app.use(favicon(__dirname + '/public/favicon.ico'))
app.use(logger('dev'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
// app.use(express.methodOverride())
app.use(express.static(__dirname + '/public'))

app.listen(app.get('port'))
