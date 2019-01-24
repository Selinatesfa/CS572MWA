const mongo= require('mongodb').MongoClient
const client= new mongo('mongodb://localhost:27017')
const express= require('express')
const app=express();
let result;
client.connect(function(err){

        const db= client.db('homework7');         
       
        const collection= db.collection('zipcodes');
//1
         result=collection.aggregate([{$match:{state:'IA'}},{$group:{_id:'$state',zips:{$push:'$_id'}}},{$project:{_id:0}}]);
    result.forEach(function(data){
        console.log(data);
    });

       // 2
         result=collection.aggregate([{$match:{pop:{$lt:1000}}},{$group:{_id:'$pop',zips:{$push:'$_id'}}},{$project:{_id:0}}]);
    result.forEach(function(data){
        console.log(data);
    });
    //3
     result=collection.aggregate([{$group:{_id:'$city',state:{$addToSet:'$state'},zips:{$sum:1}}},{$match:{'zips':{$gt:1}}},{$unwind:'$state'},{$group:{_id:'$_id'}},{$sort:{_id:1,state:-1}}]);
    result.forEach(function(data){
        console.log(data);
    });
    //4

     result=collection.aggregate([{$group:{_id:{city:'$city',state:'$state'},pop:{$sum:'$pop'}}},{$sort:{state:1,pop:-1}},{$group:{_id:'$_id.state',city:{$first:'$_id.city'},population:{$first:'$pop'}}}]);
    result.forEach(function(data){
        console.log(data);
    });
});