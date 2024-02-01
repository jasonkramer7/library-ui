import { Injectable } from '@angular/core';
import { Book } from "./book.interface";
import { HttpClient, HttpHeaders } from "@angular/common/http";
// import { Observable, throwError } from 'rxjs';
// import { catchError, retry } from 'rxjs/operators';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Observable, map } from 'rxjs';

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


}
