
const express=require('express');
const {MongoClient}=require('mongodb');

const app=express();

app.use(express.json());
const url='mongodb://localhost:27017'

app.post('/restaurants',(req,resp)=>{

    MongoClient.connect(url,(err,client)=>{
        if(err) throw err;
     
        const db=client.db('homework7');
        db.collection('locationss').insert(req.body);
        
        resp.status(200).send();
        client.close();
    })
});

app.get('/restaurants/:category',(req,resp)=>{
    MongoClient.connect(url,(err,client)=>{
        if(err) throw err;
          const db=client.db('restaurants');
          let query;
          if(req.query.name)    
             query={'category':req.params.category,'location':{'$near':[-91.9665342,41.017654]},'name':req.query.name};
            else
         query={'category':req.params.category,'location':{'$near':[-91.9665342,41.017654]}};


        db.collection('locs').find(query).limit(3).toArray((err,docs)=>{
            resp.send(docs);

        });
    
    })
    

});

app.listen(3000,()=>console.log('server started  on port 3000...' ))