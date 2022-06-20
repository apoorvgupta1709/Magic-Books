import { Component, OnInit } from '@angular/core';
import { Student } from '../Student';
import { Router } from '@angular/router';
import { StudentMockData } from '../mockStudents';
import { StudentWork } from '../StudentWork';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  student!: Student;


  constructor(private router:Router) { 
    this.student = new Student();
  }
  ngOnInit(): void {
  }

  
  onSubmit(){
    this.validate();
  }
  validate(){
    if(this.student.StudentName.length >=1){}
    else{
      alert("Enter Name");
      return;
    }
    if(this.student.StudentMobileNo.length===10){}
    else{
      alert("Enter Valid Mobile")
      return;
    }
    if(this.student.StudentEmail.includes("@") && this.student.StudentEmail.includes(".com")){
      this.addStudent();
    }else{
      alert("Enter valid Email");
    }
  }

  addStudent(){
    this.student.StudentId= ++StudentWork.studentCount;
    StudentMockData.studentList.push(this.student);
    console.log(this.student);

    this.goToList();
  }
  goToList() {
    this.router.navigate(['login']);
  }

}
