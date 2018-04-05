var superagent = require('superagent'),
cheerio = require('cheerio'),
fs = require('fs')

superagent.get('https://cnodejs.org/')
    .end(function (err, sres) {
      if (err) {
        return next(err);
      }
      // console.log(sres.text)
      var $ = cheerio.load(sres.text);
      var items = [];
      $('#topic_list .topic_title').each(function (idx, element) {
        var $element = $(element);
        items.push({
          title: $element.attr('title'),
          href: $element.attr('href')
        });
      });

      var buffer3 = Buffer.concat(items)
      var writer = fs.createWriteStream('0.txt')
      writer.write(buffer3,'utf8')
      writer.end()
      console.log(items);
});