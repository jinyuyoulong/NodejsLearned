global 最根本的作用是作为全局变量的宿主。
按照 ECMAScript 的定义，满足以下条 件的变量是全局变量：
在最外层定义的变量；
全局对象的属性；
隐式定义的变量（未定义直接赋值的变量）。

__filename
__filename 表示当前正在执行的脚本的文件名。
它将输出文件所在位置的绝对路径，且和命令行参数所指定的文件名不一定相同。 
如果在模块中，返回的值是模块文件的路径。

__dirname
__dirname 表示当前执行脚本所在的目录。

setTimeout(cb, ms)
setTimeout(cb, ms) 全局函数在指定的毫秒(ms)数后执行指定函数(cb)。：setTimeout() 只执行一次指定函数。
返回一个代表定时器的句柄值。

clearTimeout(t)
clearTimeout( t ) 全局函数用于停止一个之前通过 setTimeout() 创建的定时器。 
参数 t 是通过 setTimeout() 函数创建的计算器。

setInterval(cb, ms)
setInterval(cb, ms) 全局函数在指定的毫秒(ms)数后执行指定函数(cb)。
返回一个代表定时器的句柄值。可以使用 clearInterval(t) 函数来清除定时器。
setInterval() 方法会不停地调用函数，直到 clearInterval() 被调用或窗口被关闭。

console
console 用于提供控制台标准输出

process(进程)
process 是一个全局变量，即 global 对象的属性。
它用于描述当前Node.js 进程状态的对象，提供了一个与操作系统的简单接口。通常在你写本地命令行程序的时候，少不了要 和它打交道。