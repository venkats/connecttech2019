import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StockModule } from './stock/stock.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StockModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
