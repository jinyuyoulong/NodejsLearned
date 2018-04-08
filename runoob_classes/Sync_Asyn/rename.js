let fs = require('fs')

let path = '/Users/haicunyi/dev/ios/ios切图和标注/UI界面/首页/MarkMan/'

fs.readdir(path, function (err, files) {
	if (err) {
		console.log(err)
	}else{
		files.forEach(function (item) {
			// console.log(typeof item)//判断数据类型
			// console.log( item.indexOf('MarkMan.png'))
			if (item.indexOf('MarkMan.png') > 0) {
				// console.log('have '+item)
				// console.log(path+item)
				// console.log(path+'MarkMan/'+item)
				let new_path = item.substr(1, item.length)
				fs.rename(path+item,path+new_path, function (err) {
					if (err) {
						console.log('rename: '+err)
					}else{
						console.log('rename complete.')
					}
				})
					
			}else{
				// console.log('have not '+item)
			}
		})
	}
})
