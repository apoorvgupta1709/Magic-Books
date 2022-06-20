import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../Book';
import { BookMockData } from '../MockBookData';
import { StudentWork } from '../StudentWork';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  book : Book[] = [];



  constructor(){
    
    for (let i = 0; i < StudentWork.Wishlist.length; i++) {
      
      for(let j=0;j<BookMockData.bookList.length;j++){
        if (StudentWork.Wishlist[i] == BookMockData.bookList[j].id) {
          this.book.push(BookMockData.bookList[j]);
       
        }

      }
    }
  }

  ngOnInit(): void {
  }

}
