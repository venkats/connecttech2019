import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EventEmitter } from '@angular/core';
import { EditBookComponent } from './edit-book.component';
import { Book } from '../book';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('EditBookComponent', () => {
  let component: EditBookComponent;
  let fixture: ComponentFixture<EditBookComponent>;
  let mockFormBuilder: FormBuilder;
  let groupProperties;
  
  const cannedBook: Book = 
    new Book('anotherTitle', 'anotherAuthor', 2019, 10);

  beforeEach(async(() => {                                             
    TestBed.configureTestingModule({
      declarations: [ EditBookComponent ],
      imports: [ FormsModule, ReactiveFormsModule ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditBookComponent);

    mockFormBuilder = new FormBuilder();
    mockFormBuilder.group = function(controlsConfig: {[key: string]: any}) {
      groupProperties = controlsConfig;
      return new FormGroup({});
    }

    component = new EditBookComponent(mockFormBuilder);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have selector set', function() {
    const annotations = EditBookComponent['__annotations__'][0];
                     
    expect(annotations.selector).toEqual('edit-book');
  });
  
  it('should have input set to book', () => {
    expect(EditBookComponent['__prop__metadata__'].book).not.toBeUndefined();
  });

  it('should have output set to updateBook', () => {
    const updateBook: EventEmitter<Book> = component.updateBook;

    expect(EditBookComponent['__prop__metadata__'].updateBook)
      .not.toBeUndefined();
  });

  it('should build a form', function() {
    component.book = new Book('atitle', 'anauthor', 2019, 100);
    component.ngOnInit();
    
    expect(groupProperties.title).toEqual([component.book.title]);
    expect(groupProperties.author).toEqual([component.book.author]);
    expect(groupProperties.year).toEqual([component.book.year]);
    expect(groupProperties.quantity).toEqual([component.book.quantity]);
  });

  it('should update form controls when Input changes', function() {
    component.book = new Book('atitle', 'anauthor', 2019, 100);
    let setValue;
    
    component.ngOnInit();
    component.form.setValue = (book) => setValue = book;
    component.ngOnChanges();

    expect(setValue.title).toEqual(component.book.title);
  });
  
  it('update should emit an event', function() {
    component.form = new FormBuilder().group({
      title: 'sometitle',
      author: 'someauthor',
      year: 2019,
      quantity: 22
    });
    
    let emittedData;
    component.updateBook.emit = (data) => emittedData = data;

    component.update();
    
    expect(emittedData).toEqual(component.form.value);
  });
});
