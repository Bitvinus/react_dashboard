import { combineReducers } from 'redux';

import { positionReduser } from 'store/positions/position-reducer';
import { filterReducer } from './filters/filter-reducer';

export const rootReducer = combineReducers({
  positions: positionReduser,
  filters: filterReducer,
});
