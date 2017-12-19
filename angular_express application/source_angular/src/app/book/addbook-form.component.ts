import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Params } from '@angular/router';
import { BooksService } from './books.service';

@Component({
  selector: 'addbook',
  templateUrl: './addbook-form.component.html',
  styleUrls: ['./addbook-form.component.css']
})


export class AddBookFormComponent {
  title:String;
  author:String;
  isbn:number;
  publicationDate:Date;
  publisher:String;
  price:Number;
  genres :String[]=['Autobiography','Science fiction','Satire','Drama','Action and Adventure', 'Romance','Mystery','Horror','Self help'];
  formats:String[]=['Audiobook','Bunkobon','Chapbook','E-book','Hardcover','Folio','Paperback'];
  today: number = Date.now();

  constructor(private _bookService: BooksService,private route: ActivatedRoute, private router: Router) { }

  onSubmit(formValue: any){
    console.log("Form Value = " + JSON.stringify(formValue, null));
    //let bookCount = this._bookService.getBookCount();
    let newBook = {
      
	    //id : bookCount + 1 ,
      title:formValue.title,
      author:formValue.author,
      isbn:formValue.isbn,
      publicationDate:formValue.publicationDate,
      publisher:formValue.publisher,
      price:formValue.price,
      genre:formValue.genre,
      format:formValue.format
        };
        
    //this._bookService.addBook(newBook);
    //this.router.navigate(['books']);
     this._bookService.addBook(newBook).subscribe(
      res=> this.router.navigate(['books']),
      err => console.log(err)  
   );
  }
}
