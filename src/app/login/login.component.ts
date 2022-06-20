import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentMockData } from '../mockStudents';
import { Student } from '../Student';
import { StudentWork } from '../StudentWork';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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
    
    if(this.student.StudentMobileNo.length===10){}
    else{
      alert("Enter Valid Mobile")
      return;
    }
    if(this.student.StudentEmail.includes("@") && this.student.StudentEmail.includes(".com")){
      this.searchAndFindAnStudent(); 
    }else{
      alert("Enter valid Email");
    }
  }

  searchAndFindAnStudent() {
    let log=true;

    for (let i = 0; i < StudentMockData.studentList.length; i++) {
      if (StudentMockData.studentList[i].StudentMobileNo == this.student.StudentMobileNo 
        && StudentMockData.studentList[i].StudentEmail == this.student.StudentEmail ) {
          console.log("login Successful");
          StudentWork.StudentOnline=true;
          log=false;
          console.log(this.student);
          this.student=StudentMockData.studentList[i];
          StudentWork.Completed=this.student.completed;
          StudentWork.Wishlist=this.student.wishlist;
          this.router.navigate(['home']);
      }
    }
    if(log){
      alert("Invalid Credentials");
    }
  }
}
