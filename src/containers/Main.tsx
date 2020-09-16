import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import { H2 } from '../components/Typographics';

const useStyles = createUseStyles((theme: Theme) => ({
  main: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
    maxWidth: theme.maxWidth,
  },
}));

const Main: React.FC<React.FC> = ({ children }) => {
  const style = {};
  const theme = useTheme();
  const classes = useStyles({ theme, ...style });

  return (
    <main className={classes.main}>
      <H2>No one knows this place</H2>
      {children}
    </main>
  );
};

export { Main };
