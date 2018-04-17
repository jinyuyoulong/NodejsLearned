//Node.js 提供一组类似 UNIX（POSIX）标准的文件操作API。 Node 导入文件系统模块(fs)语法如下所示：
var fs = require('fs')

//异步和同步
//fs.readFile() fs.readFileSync()
let path = '/Users/fanjinlong/dev/0Work/ielpm_wallet_git/Ielpm_Wallet_New/BasicKit/EManger'
fs.readdir(path,function (error,files) {
	if (error) {console.log(error); return;}
	else{
		console.log(files);
		files.forEach()
	}
})