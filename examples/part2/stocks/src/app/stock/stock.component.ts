import { Component, OnInit } from '@angular/core';
import { Stock } from './stock';
import { StockService } from './stock.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  stocks: Stock[]
  newStock = new Stock('---', 0)
  form: FormGroup
  
  constructor(public service: StockService,
     public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.service.getStocks()
      .subscribe(stocks => this.stocks = stocks);
      
    this.form = this.formBuilder.group({
      ticker: [this.newStock.ticker],
      price: [this.newStock.price]
    });
    
    this.form.controls['ticker'].valueChanges
      .subscribe(change => console.log(change));
      
    setTimeout(() => this.changePrice(), 5000);
  }                                    
  
  changePrice() {
    this.newStock.price = 100;
    
//    this.form.setValue({
//      ticker: this.newStock.ticker,
//      price: this.newStock.price
//    });

      this.form.patchValue({ price: this.newStock.price });
  }
}
