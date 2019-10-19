import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { BooksService } from './books.service';

@Component({
  selector: 'books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[];
  selectedBook: Book;

  constructor(public service: BooksService) {
    this.books = [];
  }

  ngOnInit() {
    this.getBooks();
  }
  
  getBooks() {
    this.service.getBooks().subscribe(books => this.books = books);
  }
  
  edit(book) {
    this.selectedBook = book;
  }
  
  updateBook(book) {
    const bookToUpdate = this.books.find(aBook => aBook.title === book.title);
    
    bookToUpdate.quantity = book.quantity;
  }
}



