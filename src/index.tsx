import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'react-jss';
import { BrowserRouter } from 'react-router-dom';

import { configuredStore } from './store/configuredStore';
import { coreTheme } from './themes/coreTheme';

import { App } from './App';

ReactDOM.render(
  <Provider store={configuredStore}>
    <BrowserRouter>
      <ThemeProvider theme={coreTheme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
