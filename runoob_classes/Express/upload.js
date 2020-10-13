let express = require('express')
let app = express()
let fs = require('fs')
let path = require('path')
let bodyParser = require('body-parser')
let multer = require('multer')

app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended:false}))
app.use(multer({dest: '/tmp/'}).array('image'))

app.get('/updata.html', function (req, res) {
	res.sendFile(__dirname+'/'+'updata.html')
})

app.post('/file_upload', function (req, res) {
	console.log(req.files[0])   // 上传的文件信息

	//node: path 连接必须使用path方法，单纯的字符串连接没用
	let des_file = path.join(__dirname,'upload_file', req.files[0].originalname)
	fs.readFile(req.files[0].path, function (err, data) {
		
		fs.writeFile(des_file, data, function (err) {
			if (err) {
			console.log(err)
		}else{
			response = {
				message:'File uploaded successfully',
				filename:req.files[0].originalname,
				path: des_file
			}
		}

		console.log(response)
		res.send(JSON.stringify(response))
		})
		
	})	
})

var server = app.listen(3000, function () {
	var host = server.address().address
	var port = server.address().port
	console.log("应用实例，访问地址为 http://%s:%s", host, port)
})