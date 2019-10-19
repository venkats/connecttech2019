import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BooksComponent } from './books.component';
import { BooksSortPipe } from './books-sort.pipe';

@NgModule({
  declarations: [BooksComponent, BooksSortPipe ],
  providers: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [
    BooksComponent
  ]
})
export class BooksModule { }
