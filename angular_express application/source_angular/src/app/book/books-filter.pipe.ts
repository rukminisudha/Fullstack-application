import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'bookFilter'})
export class BookFilterPipe implements PipeTransform {
    transform(books: any[], args: string): any[] {
        let filter: string = args ? args.toLocaleLowerCase() : null;
        return filter ? books.filter((book) =>
            book.title.toLocaleLowerCase().startsWith(filter) != false) : books;
    }
}
