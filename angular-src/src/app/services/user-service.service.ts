import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentserviceService {

  constructor(
    private http:Http
  ) { }

  insertStudent(student){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/student/newstudent',student,{headers:headers})
      .pipe(map(res => res.json()));
  
  }

  deleteStudent(id) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.delete('http://localhost:3000/student/'+id,{headers:headers})
      .pipe(map(res => res.json()));
  }

  getOneStudent(id){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/student/getstudent/'+id,{headers:headers})
      .pipe(map(res => res.json()));
  }


  editStudent(id,student) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/student/editstudent'+id,student,{headers:headers})
      .pipe(map(res => res.json()));

  }
}


