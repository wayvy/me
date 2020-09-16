import { Middleware } from 'redux';

export const logger: Middleware = store => next => action => {
  if (process.env.NODE_ENV !== EnvModes.PRODUCTION) {
    console.log(action);
  }
  return next(action);
};
