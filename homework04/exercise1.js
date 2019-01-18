
const {Observable} =require('rxjs');
const ops= require('os');
     const ncores= ops.cpus().length;
          const memory1= (ops.freemem)/1024/1024/1024;
const obs$= Observable.create(function(observe){
      let result= "dd";
if(memory1<4){
    result="this app needs atleast 4GB memory";
   
}
if(ncores<2){
    result="processor not supported";
    
}
 if(memory1>=4 && ncores>2){
     result="system is checked succsesfuly";
     
 }      
 observe.next(result); 

});
const subscription= obs$.subscribe(
    function(x){console.log(x);},
    function(err){console.log(err);},
    function(){console.log('done');}
);

