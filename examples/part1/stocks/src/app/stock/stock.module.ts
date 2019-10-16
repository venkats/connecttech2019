import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockComponent } from './stock.component';
import { StocksortPipe } from './stocksort.pipe';
import { StockService } from './stock.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    StockComponent,
    StocksortPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],      
  providers: [ StockService ],
  exports: [
    StockComponent
  ]
})
export class StockModule { }
