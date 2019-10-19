import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockComponent } from './stock.component';
import { StocksortPipe } from './stocksort.pipe';
import { StockService } from './stock.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditstockComponent } from './editstock/editstock.component';

@NgModule({
  declarations: [
    StockComponent,
    StocksortPipe,
    EditstockComponent
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
