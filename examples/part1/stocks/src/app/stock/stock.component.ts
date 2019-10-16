import { Component, OnInit } from '@angular/core';
import { Stock } from './stock';
import { StockService } from './stock.service';

@Component({
  selector: 'stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  stocks: Stock[]
  
  constructor(public service: StockService) { }

  ngOnInit() {
    this.service.getStocks()
      .subscribe(stocks => this.stocks = stocks);
  }
}
