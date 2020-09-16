import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'react-jss';

import { configuredStore } from './store/configuredStore';
import { coreTheme } from './themes/coreTheme';

import { App } from './App';

ReactDOM.render(
  <Provider store={configuredStore}>
    <ThemeProvider theme={coreTheme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
