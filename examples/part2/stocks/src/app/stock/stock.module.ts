import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockComponent } from './stock.component';
import { StocksortPipe } from './stocksort.pipe';
import { StockService } from './stock.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    StockComponent,
    StocksortPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],      
  providers: [ StockService ],
  exports: [
    StockComponent
  ]
})
export class StockModule { }
