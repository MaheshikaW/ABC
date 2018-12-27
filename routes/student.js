

const express = require('express');
const router = express.Router();
const config = require('../config/database')
const Student = require('../models/student');

router.post('/newstudent',(req,res,next) => {   
    let newStudent = new Student ({
        studentId:req.body.studentId,
        studentName:req.body.studentName,
        studenAge:req.body.studenAge,
    }); 
    
    Student.addStudent(newStudent ,(err) => {
            if(err) {
                res.json({success:false,msg:'Failed to add Student'});
            } else{
                res.json({success:true,msg:'Student added successfully'});
            }
        });
   });

  
router.delete('/:id',(req,res,next) => {   
    const id = req.params.id;
    
    Student.deleteStudent(id,(err) => {
        if(err){
            res.json({success:false,msg:'Something went worng'})
        } else {
            res.json({success:true,msg:'Student has been deleted successfully'});
        }
    });
});


router.post('/editstudent/:id',(req,res,next) => {
    const id = request.params.id;   
    let newStudent = new Student ({
        studentId:req.body.studentId,
        studentName:req.body.studentName,
        studentAge:req.body.studentAge,   
        
    }); 
    
    Student.editStudent(id,newStudent ,(err) => {
            if(err) {
                res.json({success:false,msg:'failed to edit student'});
            } else {
                res.json({success:true,msg:'student  add successfully'});
            }
        });
   });

   router.get('/getstudent/:id',(req,res,next) => {
       const id = req.params.id;
       Student.getOneStudent(id,(err,student) => {
        if(err) {
            res.json({success:false,msg:'Failed to load student'});
        } else  {
            res.json({success:true,student:student});
        }
       });
       
   });












module.exports = router;