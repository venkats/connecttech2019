import { setStocks, changePrice, toEdit } from './stock.actions';
import { createReducer, on } from '@ngrx/store';
import { Stock } from './stock/stock';

const initialState: Stock[] = [
  new Stock("TSLA", 0),
  new Stock("GOOG", 0),
  new Stock("AMZN", 0),
  new Stock("AAPL", 0),
];                                    

const _stockReducer = createReducer(initialState,
  on(setStocks, (stocks: Stock[], { newStocks }) => newStocks),
  
  on(changePrice, (stocks: Stock[], { stock }) => 
    stocks.map(aStock => aStock.ticker === stock.ticker ?
        stock : aStock))
  );

export function stockReducer(state, action) {
  return _stockReducer(state, action);
}

const _editStockReducer = createReducer(undefined, 
  on(toEdit, (stock: Stock, { stockToEdit }) => stockToEdit)
  );

export function editStockReducer(state, action) {
  return _editStockReducer(state, action);
}