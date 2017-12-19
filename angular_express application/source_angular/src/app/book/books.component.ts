import { Component, OnInit, NgModule } from '@angular/core';
import { BooksService } from "./books.service";
import { Http, Headers } from "@angular/http";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: any;
  nameFilter: string="";

  constructor(private _bookService: BooksService) { }

 /*ngOnInit() {
    this.books = this._bookService.getBooks();
    console.log(this.books);
  }
*/

 ngOnInit(){
     this.books= this._bookService.getBooks().subscribe(
     (books:any) => this.books = books,
     err => console.log(err)  
   );
   console.log(this.books);
 }

  deleteBook(id: any) {
    this._bookService.deleteBook(id).subscribe();
    this.books = this._bookService.getBooks().subscribe(
      (books:any) => this.books = books,
      err => console.log(err)  
    );
  }
}
