import { combineReducers } from 'redux';

import { appReducer } from './appReducer';
import { uiReducer } from './uiReducer';

export const rootReducer = combineReducers({
  app: appReducer,
  ui: uiReducer,
});
