var express = require('express')
var bodyParser = require('body-parser')
var app = express()

app.use(logger(‘dev’))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.post('/test', function(req, res) {
    console.log(req.query.id);
    console.log(req.body.name);
    console.log(req.body.tel);

    res.end("end")
});

var server =  app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
})