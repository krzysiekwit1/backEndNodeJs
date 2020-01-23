const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const EmployeeSchema = new Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required:true
    },
    phoneNumber:{
        type: Number,
        required:true
    },
    date:{
        type:Date,default:Date.now
    }


});
const Employee = mongoose.model('employee',
EmployeeSchema);
module.exports = Employee;


