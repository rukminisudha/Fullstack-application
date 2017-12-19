import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BooksService } from './book/books.service';
import {AboutComponent} from './about/about.component';
import { BooksComponent } from './book/books.component';
import { BookComponent } from './book/book.component';
import { AddBookFormComponent } from './book/addbook-form.component';
import { EditBookFormComponent } from './book/editbook-form.component';
import { DeleteBookFormComponent } from './book/deletebook-form.component';
import { BookFilterPipe } from './book/books-filter.pipe';

const appRoutes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'books', component: BooksComponent },
  { path: 'books/:id', component: BookComponent },
  { path: 'addBook', component: AddBookFormComponent},
  { path: 'editBook/:id', component: EditBookFormComponent},
  { path: 'deleteBook/:id', component: DeleteBookFormComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
