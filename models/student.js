const mongoose = require('mongoose');
const config = require('../config/database');


const StudentSchema = mongoose.Schema ({

    studentId:{
        type:String,
        required:true
    },
    studentName:{
        type:String,
        required:true
    },
    studentAge:{
        type:String,
        required:true
    }
});

const Student = module.exports = mongoose.model('Student',StudentSchema);

module.exports.addStudent = function(newStudent,callback) {
        newStudent.save(callback);    
    }   

module.exports.deleteStudent = function(id,callback){
    const query = {_id:id}
    Student.remove(query,callback);
}

module.exports.editStudent = function(id,eStudent,callback) {
    const query = {_id:id}
    eStudent.update(query);
}

module.exports.getOneStudent = function(id,callback){
    const query = {_id:id}
    Student.findOne(query,callback);
}








