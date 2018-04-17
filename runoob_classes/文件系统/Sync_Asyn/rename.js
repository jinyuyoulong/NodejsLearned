let fs = require('fs')
let path = require('path')

let file_path = path.resolve('../../../../../test/LBasicBusinessComponents/LBasicBusinessComponents/Classes/QueryModule')

fileDisplay(file_path)

// 实现遍历方法
function fileDisplay(file_path) {
	fs.readdir(file_path, function (err, files) {
		if (err) {
			console.log(err)
		}else{
			files.forEach(function (item) {
				console.log('name: '+item+'  class type:'+ typeof(item))
				let filedir = path.join(file_path,item)
				
				// if (item.indexOf('MarkMan.png') > 0) {
				// 	// console.log('have '+item)
				// 	// console.log(path+item)
				// 	// console.log(path+'MarkMan/'+item)
				// 	let new_path = item.substr(1, item.length)
				// 	fs.rename(path+item,path+new_path, function (err) {
				// 		if (err) {
				// 			console.log('rename: '+err)
				// 		}else{
				// 			console.log('rename complete.')
				// 		}
				// 	})
						
				// }else{
				// 	// console.log('have not '+item)
				// }
			})
		}
	})
}

