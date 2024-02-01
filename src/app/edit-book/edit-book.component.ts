import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../services/book.service';
import { Book } from '../services/book.interface';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {

  book: Book;
  key: string;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private route: ActivatedRoute, private router: Router, private _snackBar: MatSnackBar, private bookService: BookService) { }

  ngOnInit(): void {
    this.resetBook();
    this.key = this.route.snapshot.paramMap.get('key');
    console.log(this.key);
    this.bookService.getBook(this.key).subscribe((data: Book) => {
      this.book = data;
    })
  }

  update() {
    this.bookService.updateBook(this.book, this.key).then(() => {
      this._snackBar.open('Updated', 'OK', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
      this.router.navigate(['home']);
    });
  }

  resetBook() {
    this.book = {
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
