import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BooksComponent } from './books.component';
import { BooksService } from './books.service';
import { BooksSortPipe } from './books-sort.pipe';
import { Book } from './book';
import { Observable, from } from 'rxjs';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('BooksComponent', () => {
  let component: BooksComponent;
  let fixture: ComponentFixture<BooksComponent>;
  let bookServiceMockCalled = false;
  const cannedBooks: Book[] = [ 
    new Book('anotherTitle', 'anotherAuthor', 2019, 10),
    new Book('aTitle', 'anAuthor', 2019, 10),
  ];

  class BooksServiceMock extends BooksService {
    getBooks(): Observable<Book[]> {
      bookServiceMockCalled = true;
      return from([ cannedBooks ]);
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksComponent, BooksSortPipe, /* EditBookComponent */ ],
      imports: [ HttpClientTestingModule, /* FormsModule, ReactiveFormsModule */ ],
      providers: [ { provide: BooksService, useClass: BooksServiceMock } ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksComponent);
    component = fixture.componentInstance;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should have selector set', function() {
    const annotations = BooksComponent['__annotations__'][0];
                     
    expect(annotations.selector).toEqual('books');
  });

  it('should have an empty books list on create', function() {
    expect(component.books).toEqual([]);
  });

  it('ngOnInit should call getBooks', function() {
    let called = false;
    component.getBooks = () => called = true;
    component.ngOnInit();
    
    expect(called).toBeTruthy();
  });

  it('constructor should receive and initialize service', function() {
    expect(component.service instanceof BooksServiceMock).toBeTruthy();
  });                                    
               
  it('getBooks should call get on the service', function() {
    component.getBooks();
    
    expect(bookServiceMockCalled).toBeTruthy();
  });

  it('getBooks should set books received from service', function() {
    component.getBooks();           
    expect(component.books).toEqual(cannedBooks);
  });
  
  it('should render Books', () => {
    fixture.detectChanges();

    const content = fixture.debugElement.nativeElement.innerText;
    expect(content).toContain('Books');
    expect(content).toContain('anAuthor');
    expect(content).toContain('anotherAuthor');

    expect(content.indexOf('anotherTitle') <
      content.indexOf('aTitle')).toBeTruthy;
  });
  
//  it('should contain edit button to edit book', () => {
//    fixture.detectChanges();
//
//    const content = fixture.debugElement.nativeElement;
//    expect(content.querySelector('button')).not.toBeNull();
//    expect(content.querySelector('button').innerText).toEqual('edit');
//  });
//
//  it('selectedBook is undefined', () => {
//    expect(component.selectedBook).toBeUndefined();
//  });
//  
//  it('clicking on edit should set selectedBook', () => {
//    fixture.detectChanges();
//
//    const content = fixture.debugElement.nativeElement;
//    content.querySelector('button').click();
//    
//    expect(component.selectedBook).toEqual(cannedBooks[0]);
//  });
//  
//  it('Edit book is not visible', () => {
//    fixture.detectChanges();
//
//    const content = fixture.debugElement.nativeElement;
//    expect(content.querySelector('edit-book')).toBeNull();
//  });                                                    
//
//  it('Edit book is visible if a book has been selected', () => {
//    component.selectedBook = cannedBooks[0];
//    let updatedBook: Book;
//    
//    component.updateBook = function(book) {
//      updatedBook = book;
//    }
//    
//    fixture.detectChanges();
//
//    const content = fixture.debugElement.nativeElement;
//    expect(content.querySelector('edit-book')).not.toBeNull();
//
//    //<edit-book has book property set to selectedBook
//    expect(`${content.querySelector('edit-book')
//      .getAttribute('ng-reflect-book')}`).toEqual(`${cannedBooks[0]}`);
//
//    //<edit-book registers updateBook event to updateBook method
//    fixture.debugElement.query(By.css('edit-book'))
//      .triggerEventHandler('updateBook', cannedBooks[0]);
//    
//    expect(updatedBook).toEqual(cannedBooks[0]);
//  });
//  
//  it('updateBook updates the book passed in', () => {
//    fixture.detectChanges();
//                         
//    const book = new Book(cannedBooks[0].title, 
//      cannedBooks[0].author, cannedBooks[0].year, 212);
//      
//    component.updateBook(book);
//    
//    expect(component.books[0].quantity).toEqual(212);
//  });
});
