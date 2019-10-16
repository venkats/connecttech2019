import { TestBed } from '@angular/core/testing';
import { BooksService } from './books.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { inject } from '@angular/core/testing';
import { Book } from './book';

describe('BooksService', () => {
  let service: BooksService;
  let httpMock: HttpTestingController;
  
  beforeEach(() => {                   
    TestBed.configureTestingModule({
      providers: [BooksService],
      imports: [ HttpClientTestingModule ]
    });
    
    service = TestBed.get(BooksService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('get should call get on http with correct route', function() {
    const sampleBook = new Book('t', 'a', 2019, 2);

    service.getBooks().subscribe(data =>
      expect(data[0]).toEqual(sampleBook));

    const req = httpMock.expectOne({ method: 'GET', url: '/books'});

    req.flush([ sampleBook ]);                        
              
    httpMock.verify();
  });
});
