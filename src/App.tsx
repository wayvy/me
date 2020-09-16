import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import { Init } from './components/Init';
import { Example } from './containers/Example';

const useStyles = createUseStyles((theme: Theme) => ({
  app: {
    margin: '0 auto',
    padding: '0 .25rem',
    maxWidth: theme.maxWidth,
  },
}));

const App: React.FC = () => {
  const style = {};
  const theme = useTheme();
  const classes = useStyles({ theme, ...style });

  return (
    <div className={classes.app}>
      <Init />
      <Example />
    </div>
  );
};

export { App };
