import { createAction, props } from '@ngrx/store';
import { Stock } from './stock/stock';
                             
export const setStocks = createAction('[Stock] setstocks', props<{ newStocks: Stock[] }>());

export const changePrice = createAction('[Stock] changeprice',
  props<{ stock: Stock }>());

export const toEdit = createAction('[Stock] toend', props<{ stockToEdit: Stock }>());