import { Injectable } from '@angular/core'; {}
import { HttpClient } from "@angular/common/http";
import {Http,Headers} from '@angular/http';
import {map} from 'rxjs/operators';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpclient:HttpClient,private http:Http ) { }

addStudent(student){
  console.log(student);
  let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/student/newstudent',student,{headers:headers})
      .pipe(map(res => res.json()));

}




}


