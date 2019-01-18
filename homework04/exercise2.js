
const{Subject}=require('rxjs');
const {fork}= require('child_process');
const url= require('url');


const subject= new Subject();

function checksystem(request){
    const myurl=url.parse(request.req.url,true).query.url;
    const childprocess= fork('exercise2child.js');
      childprocess.send(myurl);
    childprocess.on('message',(result)=>{
               request.res.write(result);
        request.res.end();
    });
    childprocess.on('End',()=>console.log('end'))
  
}
subject.subscribe(checksystem);

const http= require('http');
http.createServer((req,res)=>{
    
subject.next({req,res});
}).listen(3000,()=>
    console.log("listening on port 3000"));