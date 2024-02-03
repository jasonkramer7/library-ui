import { Injectable } from '@angular/core';
import { Book } from "./book.interface";
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Observable, Subject, map, pipe, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  database: AngularFireList<any>;
  books: Observable<any[]>;
  constructor(private db: AngularFireDatabase,) {
    this.database = this.db.list('/books');
    this.books = this.database.snapshotChanges().pipe(
      map(res => res.map(c => ({
        ...c.payload.val(), key: c.payload.key,
      }))

      ));
  }

  getBooks() {
    return this.books;
  }

  getBook(key: string) {
    return this.db.object("/books/" + key).valueChanges();
  }

  saveBook(body: Book) {
    return this.database.push(body);
  }

  removeBook(key: string) {
    return this.database.remove(key);
  }

  updateBook(book: Book, key: string) {
    return this.database.update(key, book);
  }

  getLikedBook() {
    return this.db.list('/books', ref => ref.orderByChild('liked').equalTo(true)).valueChanges();
  }

  clearBook() {
    const book ={
      "key": '',
      "name": '',
      "description": '',
      "author": '',
      "category": '',
      "loaned": false,
      "person": '',
      "stars": 1,
      "liked": false
    }
    return book;
  }

}
