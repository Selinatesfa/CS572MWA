
const fs= require('fs');
const url= require('url');

 
    process.on('message',(msg)=>{

    var html=fs.readFileSync(msg,'utf8');
    
        process.send(html);
     process.on('End',()=>console.log("end"));
    
});
