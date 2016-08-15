var http = require('http')
var querystring = require('querystring')
var postData = {
	uid:'889',
	pas:333,
	mob:135000000,
	con:'code is 890',
	type:'json'
}

var content = querystring.stringify(postData)

var options = {
	host:'localhost',
	path:'/index.html',
	port:8081
	method:'POST',
	agent:false,
	rejectUnauthorized: false,
	headers:{
		'Content-Type' : 'application/x-www-form-urlencoded',
		'Content-Length' : content.length
	}
}

var req = http.request(options, function (res){
	
	res.setEcoding('utf8')
	res.on('data', function (chunk) {
		console.log(JSON.parse(chunk))
	})
	res.on('end', function () {
		console.log('over')
	})
})

req.write(content)
req.end()