import { Injectable} from '@angular/core';
//import { Init } from "./initial-books";
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { log } from 'util';
import { Http, Headers } from '@angular/http';

@Injectable()
export class BooksService {
  /*constructor() {
    super();
    console.log("Initializing Books service ...");
    this.load();
  }
  */
  private _booksUrl = "http://localhost:3000/book";
  constructor (private _http: Http){ }

  /*getBookCount() {
    let books = JSON.parse(localStorage.getItem('books'));
    return books.length;
  }*/

  getBooks() {
    //let books = JSON.parse(localStorage.getItem('books'));
    //return books;
    return this._http.get(this._booksUrl)
    .map(res=> res.json());

  }

  /*getBook(id: any) {
    let books = JSON.parse(localStorage.getItem('books'));
    let book:any = null;
    for (let i = 0; i < books.length; i++) {
      if (books[i].id == id) {
        book = books[i];
        break;
      }
    }
    return book;
  }*/
  getBook(id: any) {
    return this._http.get("http://localhost:3000/book/"+id)
    .map(res=> res.json());
  }

  addBook(newBook: any) {
    //let books = JSON.parse(localStorage.getItem('books'));
    //books.push(newBook);
    //localStorage.setItem('books', JSON.stringify(books));
     console.log(newBook);
     var headers =  new Headers();
     headers.append('content-Type','application/json');
     return this._http.post("http://localhost:3000/book",
     JSON.stringify(newBook),{headers:headers})
     .map(res=> res.json());

  }

  updateBook(updatedBook: any) {
    // let books = JSON.parse(localStorage.getItem('books'));
    //for (let i = 0; i < books.length; i++) {
      //if (books[i].id == updatedBook.id) {
        //books[i] = updatedBook;
      //}
    //}
    //localStorage.setItem('books', JSON.stringify(books));
    console.log(updatedBook);
     var headers =  new Headers();
     headers.append('content-Type','application/json');
     return this._http.put("http://localhost:3000/book/"+updatedBook.id,
     JSON.stringify(updatedBook),{headers:headers})
     .map(res=> res.json());
  }

  deleteBook(id: any) {
    /*let books = JSON.parse(localStorage.getItem('books'));
    for (let i = 0; i < books.length; i++) {
      if (books[i].id == id) {
        books.splice(i, 1);
      }
    }
    localStorage.setItem('books', JSON.stringify(books));*/
    return this._http.delete("http://localhost:3000/book/"+id)
    .map(res=> res.json());

  }

}
