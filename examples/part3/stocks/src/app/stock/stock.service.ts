import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stock } from './stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(public http: HttpClient) { }
  
  getStocks(): Observable<Stock[]> {
    return this.http.get<Stock[]>('/stocks');
  }
}
