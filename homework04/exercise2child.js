
const fs= require('fs');
const url= require('url');

const myurl=url.parse("http://localhost:3000/?url=test.html",true);


   
    process.on('message',(msg)=>{

    var html=fs.readFileSync(msg,'utf8');
    
        process.send(html);
     process.on('End',()=>console.log("end"));
    
});
