import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Http, Headers} from '@angular/http';
import { AppComponent }  from './app.component';
import { Routes, RouterModule} from '@angular/router';
import { routing }  from './app.routing';
import {AboutComponent} from './about/about.component';
import { BooksComponent } from './book/books.component';
import { BookComponent } from './book/book.component';
import { AddBookFormComponent } from './book/addbook-form.component';
import { EditBookFormComponent } from './book/editbook-form.component';
import { BookFilterPipe } from './book/books-filter.pipe';
import { BooksService } from "./book/books.service";
import { DeleteBookFormComponent } from './book/deletebook-form.component';


@NgModule({
  imports: [ BrowserModule, FormsModule, HttpModule, routing, RouterModule ],
  declarations: [ AppComponent, AboutComponent, BooksComponent, BookComponent, AddBookFormComponent,  EditBookFormComponent, BookFilterPipe ,DeleteBookFormComponent ],
  providers: [ BooksService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
