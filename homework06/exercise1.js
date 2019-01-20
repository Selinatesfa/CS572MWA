var express= require('express');
var bodyparser=require('body-parser');
var path= require('path');
const cors = require('cors')
const morgan= require('morgan')
const {check,validationResult}=require('express-validator/check');
var app=express();

app.use(express.json());
app.use(cors());
app.use(morgan())
var bpar=(express.urlencoded({exteded:false}));

var grades=[
    {
        id:1,
    name: 'selina',
   grade: 30,
   course:'ea'},{ 
    id:2,
    name: 'eskemey',
grade: 14,
course:'waa'},{ 
    id:3,
    name: 'feruzey',
grade: 26,
course:'mwa'}];
app.get('/grades',function(req,res){
   
  res.json(grades);
  });
app.get('/grades/:id',function(req,res){
 const graderesult= grades.find((c)=> c.id=== parseInt(req.params.id))
 if(!graderesult) res.sendStatus(404).send('grade can not be found');
 res.send(graderesult); 
res.send(grades.id[req.params.id]);
});
app.post('/grades',[check('id').isNumeric().withMessage('ID shoudl not be empty and is numeric')

,check('grade').isLength({max:1})],function(req,res){
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({errors:errors.array()});
    }
    const newgrade= {
        id: grades.length +1,
        name: req.body.name,
        grade: req.body.grade,
        course:req.body.course
    };
    grades.push(newgrade);

    res.json(newgrade);
});
app.put('/grades/:id',[check('id').isNumeric().withMessage('ID shoudl not be empty and is numeric')

,check('grade').isLength({max:1})],function(req,res){
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({errors:errors.array()});
    }
    const graderesult= grades.find((c)=> c.id=== parseInt(req.params.id))
    if(!graderesult) return res.sendStatus(404).send('grade can not be found');

    graderesult.name= req.body.name;
    graderesult.grade=req.body.grade;
    graderesult.course=req.body.course;
      res.json(graderesult);
});
app.delete('/grades/:id',function(req,res){
    const graderesult= grades.find((c)=> c.id=== parseInt(req.params.id))
    if(!graderesult) return res.sendStatus(404).send('grade can not be found');
  grades.pop(graderesult);
    res.json(grades);
})

app.listen(3000,function(){
console.log('listing on port 3000 ....');
});
