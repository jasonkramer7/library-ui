import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../services/book.interface';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss']
})
export class AddNewComponent implements OnInit {

  newBook:Book;


  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.resetBook();
  }

  save() {
    console.log(this.newBook);
    this.bookService.saveBook(this.newBook).subscribe(ret => {
      this.resetBook();
    },
    err => {
      console.log(err);
    });
  }

  resetBook() {
    this.newBook = {
      "name": '',
      "description": '',
      "isbn": '',
      "authors": [
        {
          "name": ''
        }
      ],
      "categories": [
        {
          "name": ''
        }
        ]
    }
  }

}
