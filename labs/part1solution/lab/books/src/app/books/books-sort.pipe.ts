import { Pipe, PipeTransform } from '@angular/core';
import { Book } from './book';

@Pipe({
  name: 'sortbooks'
})
export class BooksSortPipe implements PipeTransform {
  transform(books: Book[]) {
    return [...books].sort((book1, book2) =>
      book1.title.localeCompare(book2.title));
  }
}
