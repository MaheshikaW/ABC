import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../../services/user-service.service';

import {Router} from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
studentId:String;
studentName:String;
StudentAge:String;


  constructor(private userService:UserServiceService,) { }

  ngOnInit() {


  

}

OnSubmit(){
  const student ={
    studentId:this.studentId,
    studentName:this.studentName,
    StudentAge:this.StudentAge
  }

  this.userService.addStudent(student)

  
 
  
 
   
  
  
    }
  
  
}
