import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StockModule } from './stock/stock.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { stockReducer, editStockReducer } from './stock.reducers';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StockModule,
    StoreModule.forRoot({ stocks: stockReducer, editStock: editStockReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
