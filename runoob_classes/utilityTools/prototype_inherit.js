 // 继承
  function worker(){  
        this.name="";  
        this.address="";  
    }  
//定义一个部门经理  
    function manager(_dept){  
        this.dept=_dept;  
    }  
//定义继承关系  
    manager.prototype=new worker();  
//创建计划部门经理  
    var jh=new manager("计划");  
    for(pro in jh){  
        console.log(pro,":",jh[pro]);  
    }  
    console.log('#####################')
//当前jh有效没有改变原型对象中的值  
    jh.name="计划部门经理";  
    jh.address="计划部";  
    for(pro in jh){  
        console.log(pro,":",jh[pro]);  
    }  
     console.log('#####################')
//原型对象中的值没有被修改  
    var rs=new manager('人事'); 
    for(pro in rs){  
        console.log(pro,":",rs[pro]);  
    }  
    console.log('#####################')
// 修改原型对象中的值，将会在继承的对象中体现,如果继承类中没有覆盖  
manager.prototype.address="成都市";  
//覆盖后address的值还是原来的计划  
for(pro in jh){  
        console.log(pro,":",jh[pro]);  
    }  
//没有覆盖address的值是成都市  
for(pro in rs){  
        console.log(pro,":",rs[pro]);  
}  