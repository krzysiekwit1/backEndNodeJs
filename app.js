const express = require("express");
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//test?retryWrites=true&w=majority/
mongoose
.connect('mongodb+srv://krzysiekwit:krzysiek@sklep-7wv9j.mongodb.net/',{
    dbName: 'sklep',
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log('mongo conected');
});

app.all('/test',(req,res)=>{

   // console.log(req.query);
   // console.log(req.query.name);
  //  res.send(req.query);
  //console.log(req.params);
  //res.send(req.params);
  console.log(req.body);
  res.send(req.body);
});

const EmployeeRoute = require('./Routes/employee.route');

app.use('/employees', EmployeeRoute);


app.use((req,res,nxet)=>{
const err = new Error("Not found");
err.status= 404;
next(err);
});

//erro handler express
app.use((err,req,res,next)=> {
 res.status(err.status || 500);
 res.send({
     error:{
         status:err.status || 500,
         message: err.message
     }
 });
});


app.listen(3000, () =>{
    console.log("server on 3000");
});


