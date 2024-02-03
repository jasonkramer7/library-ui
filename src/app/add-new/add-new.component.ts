import { Component, OnInit } from '@angular/core';
import { Book } from '../services/book/book.interface';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { BookService } from '../services/book/book.service';
import { StarRatingColor } from '../star-rating/star-rating.component';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss']
})
export class AddNewComponent implements OnInit {
  rating:number = 1;
  starCount:number = 5;
  starColor:StarRatingColor = StarRatingColor.accent;
  starColorP:StarRatingColor = StarRatingColor.primary;
  starColorW:StarRatingColor = StarRatingColor.warn;
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
    this.newBook.stars = this.rating;
    this.bookService.saveBook(this.newBook).then((data) => {
      this._snackBar.open('Saved', 'OK', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
      this.resetBook();
    });

  }

  onRatingChanged(rating){
    console.log(rating);
    this.rating = rating;
  }

  resetBook() {
    this.newBook = this.bookService.clearBook();
  }

}
