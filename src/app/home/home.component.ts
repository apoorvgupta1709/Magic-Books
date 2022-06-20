import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../Book';
import { BookMockData } from '../MockBookData';
import { StudentWork } from '../StudentWork';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  book : Book[] = [];


  constructor(private router:Router,private activateRoute:ActivatedRoute){
    

    this.book = BookMockData.bookList;

  }
  ngOnInit(): void {
  }
  checkIfWishListExist(id:number) {
    for (let i = 0; i < StudentWork.Wishlist.length; i++) {
      if(StudentWork.Wishlist[i]=== id){
        return true;   
      }
    }
    return false;

  }
  checkIfCompletedListExist(id:number) {
    for (let i = 0; i < StudentWork.Completed.length; i++) {
      if(StudentWork.Completed[i]=== id){
        return true;   
      }
    }
    return false;

  }

  Wishlist(id:number){
    if(StudentWork.StudentOnline){
      if(!this.checkIfWishListExist(id)){
        StudentWork.Wishlist.push(id);
      }
      else{
        alert("Already added in Wishlist")
      }

    }else{
      alert("plz Login");

    }

    // console.log(StudentWork.Wishlist);

  }

  Completed(id:number){
    if(StudentWork.StudentOnline){
      if(!this.checkIfCompletedListExist(id)){
        StudentWork.Completed.push(id);
      } else{
        alert("Already added in Completed List")
      }
    }else{
      alert("plz Login");

    }


  }

}


