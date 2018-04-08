// 引用
function computer(){  
  
     this.name="thinkPad 500";  
     this.factory="联想";  
     this.price=5000;  
     this.size=17;  
 }  
 /* 
  *读取函数中的prototype,默认情况下为空 
  */  
 for( pro in computer.prototype){  
	console.log(computer.prototype+'prototype is null \n')
 }   
 //没有继承原型对象中属性  
 var mycomputer=new computer();  
  for( pro in mycomputer){  
	console.log(pro,":",mycomputer[pro])
 }   
 computer.prototype.interface="VAG";  
 //添加原型对象的属性  
  for( pro in computer.prototype){  
	 console.log(pro,":",mycomputer[pro])
 }   
 //继承原型对象中属性  
 var mycomputer=new computer();  
  for( pro in mycomputer){  
	 console.log(pro,":",mycomputer[pro])
 } 