var Robot = require("./robot.js");
var oOptions = {
    domain:'baidu.com', //抓取网站的域名
    firstUrl:'http://www.baidu.com/', //抓取的初始URL地址
    saveDir:"./content/", //抓取内容保存目录
    debug:true, //是否开启调试模式
};
var o = new Robot(oOptions);
o.crawl(); //开始抓取