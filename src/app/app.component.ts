import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentMockData } from './mockStudents';
import { StudentWork } from './StudentWork';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MagicBooks';

  constructor(private router:Router) { 

  }

  logout(){
    StudentWork.StudentOnline=false;
    this.addWishCompList();
    StudentWork.Wishlist=[];
    StudentWork.Completed=[];
    this.router.navigate(['home']);
    alert("Logout Successful");


  }
  addWishCompList(){

    for (let i = 0; i < StudentMockData.studentList.length; i++) {
      if (StudentMockData.studentList[i].StudentId == StudentWork.studentCount) {
        StudentMockData.studentList[i].wishlist=StudentWork.Wishlist;
        StudentMockData.studentList[i].completed=StudentWork.Completed;
         
      }
    }

  }
}
