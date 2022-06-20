import { Component, OnInit } from '@angular/core';
import { Book } from '../Book';
import { BookMockData } from '../MockBookData';
import { StudentWork } from '../StudentWork';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent implements OnInit {

  book : Book[] = [];



  constructor(){
    
    for (let i = 0; i < StudentWork.Completed.length; i++) {
      
      for(let j=0;j<BookMockData.bookList.length;j++){
        if (StudentWork.Completed[i] == BookMockData.bookList[j].id) {
          this.book.push(BookMockData.bookList[j]);
       
        }

      }
    }
  }
  ngOnInit(): void {
  }

}
