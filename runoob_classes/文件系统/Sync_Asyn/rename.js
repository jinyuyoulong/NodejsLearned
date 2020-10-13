let fs = require('fs')
let path = require('path')

let file_path = path.resolve('/Users/fanjinlong/dev/ios/Lottery/Lottery/MyClasses')

fileDisplay(file_path)

// ------------------------------------------------
// 实现遍历方法
function fileDisplay(file_path) {
	fs.readdir(file_path, filesForEach)
}
function filesForEach(err,files) {
	if (err) {
		console.log(err)
	}else{
		files.forEach(eachItem)
	}
}
function eachItem(item) {
	// console.log('name: '+item+'  class_type:'+ typeof(item))
	let filedir = path.join(file_path,item)
	fs.stat(filedir,rename)
}

function rename(error,stats,file_path) {
	if (error) {
		console.warn('获取文件stats失败')
	}else{
		let isFile = stats.isFile();
		let isDir = stats.isDirectory()
		console.log(stats)

		// if (isFile) {
		// 	// console.log(item)
		// 	//rename
		// 	let new_name = item.replace('E','L')
		// 	console.log('newname: '+new_name)
		// 	fs.rename(path.join(file_path,item), path.join(file_path,new_name) file_path+new_name, function (err) {
		// 		if (err) {console.warn('rename err->'+err)}
		// 			else
		// 				console.log('rename complete')
		// 	})
		// }

		// if (isDir) {fileDisplay(filedir)}//递归
	}
}



