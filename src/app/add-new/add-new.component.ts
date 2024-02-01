import { Component, OnInit } from '@angular/core';
import { Book } from '../services/book.interface';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss']
})
export class AddNewComponent implements OnInit {

  newBook: Book;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private bookService: BookService, private _snackBar: MatSnackBar) { }
  database: AngularFireList<any>;

  ngOnInit(): void {
    this.resetBook();
  }

  save() {
    console.log(this.newBook);
    this.bookService.saveBook(this.newBook).then((data) => {
      this._snackBar.open('Saved', 'OK', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
      this.resetBook();
    });

  }

  resetBook() {
    this.newBook = {
      "key": '',
      "name": '',
      "description": '',
      "author": '',
      "category": '',
      "loaned": false,
      "person": ''

    }
  }

}
