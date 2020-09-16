import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { logger } from './middleware/logger';
import thunk from 'redux-thunk';

import { rootReducer } from './reducers/rootReducer';

let middleware = applyMiddleware(thunk, logger);
if (process.env.NODE_ENV !== EnvModes.PRODUCTION) {
  middleware = composeWithDevTools(middleware);
}

const configuredStore = createStore(rootReducer, middleware);

export { configuredStore };
