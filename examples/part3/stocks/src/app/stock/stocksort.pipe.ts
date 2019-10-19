import { Pipe, PipeTransform } from '@angular/core';
import { Stock } from './stock';

@Pipe({
  name: 'sortstock'
})
export class StocksortPipe implements PipeTransform {

  transform(stocks: Stock[]): any {
    return [...stocks].sort((s1, s2) =>
      s1.ticker.localeCompare(s2.ticker));
  }

}
