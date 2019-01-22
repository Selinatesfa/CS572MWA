const mongo= require('mongodb').MongoClient
const client= new mongo('mongodb://localhost:27017')
var crypto = require('crypto');
const express= require('express')
const app=express();

var key = 'asaadsaad';
const algorithm = 'aes256';
app.use((req,res,next)=>{
    client.connect(function(err){
        const db= client.db('homework7');         
        req.db=db;
       return next();
    })       
})
app.get('/secret',(req,res)=>{
    const collection= req.db.collection('newcollection');
    collection.findOne({},function(err,data){
       const decipher = crypto.createDecipher(algorithm, key);
       const decrypted = decipher.update(data.message, 'hex', 'utf8') + decipher.final('utf8');
res.json(decrypted)
       client.close();
    });
});
app.listen(3000,()=>console.log('listing on port 3000'))


