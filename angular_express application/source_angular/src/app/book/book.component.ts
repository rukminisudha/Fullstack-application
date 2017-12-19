import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Location } from "@angular/common";
import { BooksService } from "./books.service";

import "rxjs/add/operator/map";

@Component({
    selector: 'app-books',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
    id: any;
    book: any;
    
    constructor(private _bookService: BooksService, private route: ActivatedRoute,private router: Router, private location: Location) {
    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            this.id = +params['id'];
        });
        
        this.book = this._bookService.getBook(this.id);
		console.log(this.book);
        console.log("book component");
    }

    goBack(): void {
        this.location.back();
    }
}
