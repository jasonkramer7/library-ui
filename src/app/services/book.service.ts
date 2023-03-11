import { Injectable } from '@angular/core';
import { Book} from "./book.interface";
import {HttpClient, HttpHeaders} from "@angular/common/http";
// import { Observable, throwError } from 'rxjs';
// import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  url = 'http://localhost:8080';
  private books: Book[] = [];
  bookUrl = '/books'

  constructor(private http: HttpClient) { }

  getBooks() {
  return this.http.get<Book[]>(this.url + this.bookUrl);

  }

  saveBook(body:Book) {
    return this.http.post(this.url+'/book', body);
  }


}
