var cheerio    = require('cheerio'),  // 爬内容

    // CronJob    = require('cron').CronJob, // 定时任务
    // nodemailer = require('nodemailer'), // 发邮件
    async      = require('async'),  // 做流程控制
    request    = require('request'),   //  取网页
    gbk        = require('gbk')   // 转编码


 function getHTML(next) {
    var options = {
        url: 'http://kaijiang.500.com/dlt.shtml',  
        encoding: null
    }
    request(options, function (error, response, body) {
          if (!error && response.statusCode == 200) {
            next(null, body)
          }
    })
}
function parser(body,next) { 
    var result = gbk.toString('utf-8', body)
    next(null, result)
}
function getResult(html,next) {
     var $ = cheerio.load(html,{decodeEntities: false})
     var table = $('table.kj_tablelist02')
     var series = $('.span_left',table).text()
     var number = $('.ball_box01 ul', table).text()
         number = number.replace(/\s+/g, ' ')
     next(null, {series:series, number:number})
}

function sendMail(content,next) {
  var fs = require('fs')

  var data = content

  var writerStream = fs.createWriteStream('0.txt')

  // 使用 utf8 编码写入数据
  writerStream.write(data, 'utf8')

  // // 标记文件末尾
  writerStream.end()

  writerStream.on('finish', function () {
    console.log('写入完成。')
  })

  writerStream.on('error', function (error) {
    console.log(error.stack)
  })

  console.log('程序执行完毕！')

  // var smtpTransport = nodemailer.createTransport({
  //       service: "QQ",
  //       auth: {
  //           user: "YOUR QQ",
  //           pass: "YouR QQ Password"
  //       }
  //   });
  //   //邮件选项设置
  //   var mailOptions = {
  //       from: "xxx", // 发件人地址
  //       to: "zzz", //多个收件人用,分隔
  //       subject: content['series'], // 主题
  //       html: "<h1>" + content['number']+"</h1>"
  //   }
  //   //发送
  //   smtpTransport.sendMail(mailOptions, function(error, response){
  //       if(error){
  //           console.log(error);
  //       }else{
  //           console.log("Message sent!");
  //       }
  //       smtpTransport.close();
  //   });
}




// var job = new CronJob({
//   cronTime: '00 30 07 * * 2,4,7',  // 0 or 7 is sunday
//   onTick: function() {
//       async.waterfall([
//           function(next) {
//               getHTML(next);
//           },
//           function(body,next){
//               parser(body,next)
//           },
//           function(html,next){
//               getResult(html,next)
//           }
//       ], function (err, result) {
//          sendMail(result)
//       });
//   },
//   start: false,
//   timeZone: 'Asia/ShangHai'
// });




var job = function() {
      async.waterfall([
          function(next) {
              getHTML(next);
          },
          function(body,next){
              parser(body,next)
          },
          function(html,next){
              getResult(html,next)
          }
      ], function (err, result) {
         sendMail(result)
      })
    };

job()