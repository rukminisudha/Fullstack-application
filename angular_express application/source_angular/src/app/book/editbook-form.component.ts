import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { BooksService } from "./books.service";
import { log } from 'util';

@Component({
  selector: 'editbook-form',
  templateUrl: './editbook-form.component.html',
  styleUrls: ['./editbook-form.component.css']
})
export class EditBookFormComponent {
  genres :String[]=['Autobiography','Science fiction','Satire','Drama','Action and Adventure', 'Romance','Mystery','Horror','Self help'];
  formats:String[]=['Audiobook','Bunkobon','Chapbook','E-book','Hardcover','Folio','Paperback'];

  constructor(private _bookService: BooksService, private route: ActivatedRoute, private router: Router) { }
  id: any;
  book: any;

  ngOnInit(): void {
      this.route.params.forEach((params: Params) => {
          this.id = +params['id'];
      });
      this.book = this._bookService.getBook(this.id).subscribe(
        (book:any)=> this.book=book,
        err=> console.log(err)
      );
  }

  onSubmit(formValue: any){
    console.log("Form Value = " + JSON.stringify(formValue, null, 4));
    let updatedBook = {
          id: this.book.id,
          title: formValue.title,
          author: formValue.author,
          publisher: formValue.publisher,
          isbn: formValue.isbn,
          publicationDate: formValue.publicationDate,
          price: formValue.price,
          genre: formValue.genre,
          format: formValue.format
        };
    //this._bookService.updateBook(updatedBook);
    //this.router.navigate(['books']);
    this._bookService.updateBook(updatedBook).subscribe(
      res => this.router.navigate(['books'])
    );
  }
}
