//const axios = require('axios');
const express = require('express');



var app = express();


app.disable('case senstive routing', false);
app.set('strict routing', false);
app.set('trust proxy', true);

app.use((req, res, next) => {
    client.connect(function (err) {
        const db = client.db('homework7');
        req.db = db;
        return next();
    })
})

app.get('/login', function (req, res) {
    // res.set({
    //     'link': ' https://randomuser.me/api/?results=10&page=2 rel="next"',
    //     'cache-controll': private,


    // });

    const user = req.body;
    const collection = req.db.collection('newcollection');
    const result = collection.findOne({ email: user.email })
    res.json(result);



});
app.post('/signup', (req, res) => {
    const user = req.body;
    const collection = req.db.collection('newcollection');
    collection.insert({ user })
    res.send('saved succesfully');

})

app.listen(2000, function () {
    console.log('server started on port 3000 ... ');
});
