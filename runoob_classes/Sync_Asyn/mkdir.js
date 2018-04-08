var fs = require('fs');
fs.mkdir('./creatdir', 0777, function(err){
 if(err){
  console.log(err);
 }else{
  console.log("creat done!");
 }
})
