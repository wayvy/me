import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Route, Switch } from 'react-router-dom';

import { Main } from './containers/Main';
import { About } from './containers/About';

import { Init } from './components/Init';

const useStyles = createUseStyles((theme: Theme) => ({
  app: {},
}));

const App: React.FC = () => {
  const style = {};
  const theme = useTheme();
  const classes = useStyles({ theme, ...style });

  return (
    <div className={classes.app}>
      <Init />
      <Switch>
        <Route exact path="/" component={ Main } />
        <Route path="/about" component={ About } />
      </Switch>
    </div>
  );
};

export { App };
