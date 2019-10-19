import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Stock } from '../stock';
import { Store, select } from '@ngrx/store';
import { changePrice } from '../../stock.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'editstock',
  templateUrl: './editstock.component.html',
  styleUrls: ['./editstock.component.css']
})
export class EditstockComponent implements OnInit {
  form: FormGroup
  stockToEdit: Observable<Stock>

  constructor(public formBuilder: FormBuilder, 
    public store: Store<{ stocks: Stock[], editStock: Stock }>) { }

  ngOnInit() {      
    this.updateView(new Stock('', 0));
    
    this.stockToEdit = this.store.pipe(select('editStock'));
    
    this.stockToEdit.subscribe(stock => this.updateView(stock));
  }
  
  updateView(stock) {
    this.form = this.formBuilder.group(stock);
  }
  
  update() {
    this.store.dispatch(changePrice({ stock: this.form.getRawValue() }));
  }
}
