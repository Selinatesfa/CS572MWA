
const axios= require('axios');
const express= require('express');

var app= express();
app.disable('case senstive routing',false);
app.set('strict routing',false);
app.set('trust proxy',true);

app.get('/users', async function(req,res){
       const response = await axios.get('https://randomuser.me/api/?results=10');
                     res.set({
            'link':' https://randomuser.me/api/?results=10&page=2 rel="next"',
             
        });
    res.json(response.data);
 

    
});

app.listen(2000,function(){
    console.log('server started on port 3000 ... ');
});