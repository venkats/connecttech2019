import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BooksComponent } from './books.component';
import { BooksService } from './books.service';
import { BooksSortPipe } from './books-sort.pipe';
//import { Book } from './book';
import { Observable, from } from 'rxjs';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('BooksComponent', () => {
  let component: BooksComponent;
  let fixture: ComponentFixture<BooksComponent>;
//  let bookServiceMockCalled = false;
//  const cannedBooks: Book[] = [ 
//    new Book('anotherTitle', 'anotherAuthor', 2019, 10),
//    new Book('aTitle', 'anAuthor', 2019, 10),
//  ];

//  class BooksServiceMock extends BooksService {
//    getBooks(): Observable<Book[]> {
//      bookServiceMockCalled = true;
//      return from([ cannedBooks ]);
//    }
//  }

  beforeEach(async(() => {
//    TestBed.configureTestingModule({
//      declarations: [ BooksComponent, BooksSortPipe ],
//      imports: [ HttpClientTestingModule ],
//      providers: [ { provide: BooksService, useClass: BooksServiceMock } ]
//    })
//    .compileComponents();
//
//    fixture = TestBed.createComponent(BooksComponent);
//    component = fixture.componentInstance;
  }));

  xit('should create', () => {
//    expect(component).toBeTruthy();
  });
  
  xit('should have selector set', function() {
//    const annotations = BooksComponent['__annotations__'][0];
//                     
//    expect(annotations.selector).toEqual('books');
  });

  xit('should have an empty books list on create', function() {
//    expect(component.books).toEqual([]);
  });

  xit('ngOnInit should call getBooks', function() {
//    let called = false;
//    component.getBooks = () => called = true;
//    component.ngOnInxit();
//    
//    expect(called).toBeTruthy();
  });

  xit('constructor should receive and initialize service', function() {
//    expect(component.service instanceof BooksServiceMock).toBeTruthy();
  });                                    
               
  xit('getBooks should call get on the service', function() {
//    component.getBooks();
//    
//    expect(bookServiceMockCalled).toBeTruthy();
  });

  xit('getBooks should set books received from service', function() {
//    component.getBooks();           
//    expect(component.books).toEqual(cannedBooks);
  });
  
  xit('should render Books', () => {
//    fixture.detectChanges();
//
//    const content = fixture.debugElement.nativeElement.innerText;
//    expect(content).toContain('Books');
//    expect(content).toContain('anAuthor');
//    expect(content).toContain('anotherAuthor');
//
//    expect(content.indexOf('anotherTitle') <
//      content.indexOf('aTitle')).toBeTruthy;
  });
});
