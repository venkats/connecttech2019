import { Component, OnInit } from '@angular/core';
import { Stock } from './stock';
import { StockService } from './stock.service';
import { Store, select } from '@ngrx/store';
import { setStocks, toEdit } from '../stock.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  stocks: Observable<Stock[]>
  selectedStock: Stock
  
  constructor(public service: StockService,
     public store: Store<{ stocks: Stock[], editStock: Stock }>) { }

  ngOnInit() {
    this.stocks = this.store.pipe(select('stocks'));
    
    this.service.getStocks()
      .subscribe(stocks => this.setStocks(stocks));
  }                                    
  
  setStocks(stocks) {
    this.store.dispatch(setStocks({ newStocks: stocks }));
  }

  select(stock) {
    this.selectedStock = stock;
    this.store.dispatch(toEdit({ stockToEdit: stock }));
  }
}
