const express = require('express');
const router = express.Router();

const Employee = require('../Models/Employee.model');

router.get('/', async (req, res ,next) => {
    try{

        const results = await Employee.find({},{__v: 0});
        res.send(results);
    }catch{
        console.log(error.message);
    }
});


router.post('/', async (req,res,next) => {
    try {
        const employee = new Employee(req.body);
        const result = await employee.save();
        res.send(result);
    }catch(error){
        console.log(error.message);
    }
});

router.get('/:id', async (req,res,next)=>{
    const id = req.params.id;
    try{
        const employee = await Employee.findById(id);
        res.send(employee);
    }catch (error){
        console.log(error.message);

    }
});


router.patch('/:id', async (req,res,next)=>{
    try{
        const id = req.params.id;
        const updates = req.body;
        const options = { new:true};

        const result = await Employee.findByIdAndUpdate(id,updates,options);
        res.send(result);
    }catch(error){
        console.log(error.message);

    }

});



router.delete('/:id', async (req,res,next)=>{
    const id =req.params.id;
    try{
        const result = await Employee.findByIdAndDelete(id);
        res.send(result);
    }catch(error){
        console.log(error.message);

    }
});


module.exports = router;