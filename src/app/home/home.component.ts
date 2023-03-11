import { Component, OnInit } from '@angular/core';
import {BookService} from "../services/book.service";
import {Book} from "../services/book.interface";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((data: Book[]) => {
      console.log('did i get some books? ', data);
    });
  }

}
