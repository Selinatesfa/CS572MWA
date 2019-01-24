const mongo= require('mongodb').MongoClient
const client= new mongo('mongodb://localhost:27017')
const express= require('express')
const app=express();
client.connect(function(err){

        const db= client.db('homework7');         
       
        const collection= db.collection('restuarants');
        // 1.
    // const result=collection.find();
    // result.forEach(function(data){
    //     console.log(data);
    // }
    //)
    //2.
    // const result=collection.find().project({address:0,grades:0});
    // result.forEach(function(data){
    //     console.log(data);
    // }
    // )
    // //3
    // const result=collection.find().project({address:0,grades:0,_id:0});
    // result.forEach(function(data){
    //     console.log(data);
    // }
    // )
    //4
    // const result=collection.find().project({'address.zipcode':1,restaurant_id:1,name:1,district:1,_id:0});
    // result.forEach(function(data){
    //     console.log(data);
    // }
    // )
    //5
    // const result=collection.find({district:'Bronx'});
    // result.forEach(function(data){
    //     console.log(data);
    // }
    // )
    //6
    // const result=collection.find({district:'Bronx'});
    // result.limit(5);
    // result.forEach(function(data){
    //     console.log(data);
    // })
    //7
    // const result=collection.find({district:'Bronx'});
    // result.limit(5);
    // result.skip(5);
    // result.forEach(function(data){
    //     console.log(data);
    // })
// 8
// const result=collection.find({'address.coord':{$elemMatch:{$lt:-95.754168}} });
// result.forEach(function(data){
//     console.log(data);
// });
//9
// const result=collection.find({$and:[{cuisine:{$ne:'American '}},{grades:{$elemMatch:{score:{$gt:70}}}},{'address.coord':{$elemMatch:{$lt:-65.754168}}}]});
// result.forEach(function(data){
//     console.log(data);
// })
//10

// const result=collection.find({name:{$regex:"Wil.*"}}).project({cuisine:1,restaurant_id:1,name:1,district:1,_id:0});
// result.forEach(function(data){
//     console.log(data);
// })
//11
// const result=collection.find({name:{$regex:"ces$"}}).project({cuisine:1,restaurant_id:1,name:1,district:1,_id:0});
// result.forEach(function(data){
//     console.log(data);
// })
//12
// const result=collection.find({name:{$regex:".*Reg.*"}}).project({cuisine:1,restaurant_id:1,name:1,district:1,_id:0});
// result.forEach(function(data){
//     console.log(data);
// })
//13
// const result=collection.find({$and:[{district:'Bronx'},{cuisine:'American',cuisine:'Chinese'}]});
//     result.forEach(function(data){
//         console.log(data);
//     })

//14
//  const result=collection.find({district:{$in:['Staten Island','Bronx','Queens','Brooklyn']}}).project({cuisine:1,restaurant_id:1,name:1,district:1,_id:0});
// result.forEach(function(data){
//     console.log(data);
// })

//15
// const result=collection.find({district:{$nin:['Staten Island','Bronx','Queens','Brooklyn']}}).project({cuisine:1,restaurant_id:1,name:1,district:1,_id:0});
// result.forEach(function(data){
//     console.log(data);
// })
//16
// const result=collection.find({grades:{$elemMatch:{score:{$lt:10}}}}).project({cuisine:1,restaurant_id:1,name:1,district:1,_id:0});
// result.forEach(function(data){
//     console.log(data);
//})

//17 ???
const result= collection.find({'address.coord.1':{$gt:42,$lt:54}}).project({restaurant_id:1,name:1,address:1,coord:1,_id:0})
result.forEach(function(data){
    console.log(data);
})
//18
// const result= collection.find().sort({name:1})
// result.forEach(function(data){
//     console.log(data);
// })
//19
// const result= collection.find().sort({name:-1})
// result.forEach(function(data){
//     console.log(data);
// })
//20
// const result= collection.find().sort({cuisine:1,district:-1})
// result.forEach(function(data){
//     console.log(data);
// })
//21
// const result= collection.find({'address.street':{$exists:true}})
// result.forEach(function(data){
//     console.log(data);
// })
//22
// const result= collection.find({'address.coord':{$type:"double"}})
// result.forEach(function(data){
//     console.log(data);
// })
//23


// const result=collection.find({name:{$regex:"Mad.*"}}).project({cuisine:1,name:1,district:1,coord:1,_id:0});
// result.forEach(function(data){
//     console.log(data);
// })



})
