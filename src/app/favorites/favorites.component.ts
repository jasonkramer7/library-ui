import { Component, OnInit, ViewChild } from '@angular/core';
import { Book } from "../services/book/book.interface";
import { BookService } from '../services/book/book.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  displayedColumns: string[] = ['liked','name', 'author', 'description', 'category', 'loaned', 'person', 'stars', 'edit', 'delete'];
  dataSource = new MatTableDataSource<Book>;

  constructor(private _liveAnnouncer: LiveAnnouncer, private bookService: BookService, private _snackBar: MatSnackBar) { }
  books: Book[];

  ngOnInit(): void {
    this.bookService.getLikedBook().subscribe((books: Book[]) => {
      this.dataSource.data = books;
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  removeBook(key: string) {
    this.bookService.removeBook(key).then(() => {
      this._snackBar.open('Removed', 'OK', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
    })
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  isLiked(book: Book) {
    book.liked=!book.liked;
    this.bookService.updateBook(book, book.key);
  }

}
