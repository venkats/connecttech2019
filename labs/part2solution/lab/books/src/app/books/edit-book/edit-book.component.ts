import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Book } from '../book';

@Component({
  selector: 'edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  @Input() book: Book;
  @Output() updateBook = new EventEmitter<Book>();
  form: FormGroup;
  
  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: [this.book.title],
      author:  [this.book.author],
      year:  [this.book.year],
      quantity:  [this.book.quantity],
    });
  }
  
  ngOnChanges() {
    if(this.form) {
      this.form.setValue(this.book);
    }
  }
  
  update() {
    this.updateBook.emit(this.form.getRawValue());
  }
}




