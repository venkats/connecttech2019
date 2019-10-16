import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BooksModule } from './books/books.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BooksModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
