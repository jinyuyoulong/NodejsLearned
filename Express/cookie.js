var express = require('express')
var app = express()
var cookieParser = require('cookie-parser')

app.use(cookieParser())
app.get('/', function (req, res) {
	console.log('Cookies:', res.cookies)
})

app.listen(8081)