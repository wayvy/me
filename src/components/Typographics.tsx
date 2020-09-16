import React from 'react';
import { useTheme, createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme: Theme) => ({
  h1: {
    fontSize: '1.5rem',
  },
  h2: {
    padding: '0 1rem',
    margin: '6rem 0 2rem 0',
    fontSize: '3rem',
    fontWeight: 'bolder',
  },
  h3: {
    color: theme.backgroundContrast,
    background: theme.colorHighlight,
    margin: '0',
    padding: '.25rem .5rem .25rem 1rem',
    fontWeight: 'normal',
  },
}));

const H1: React.FC<React.ReactNode> = ({ children }) => {
  const style = {};
  const theme = useTheme();
  const classes = useStyles({ theme, ...style });

  return <h1 className={classes.h1}>{children}</h1>;
};

const H2: React.FC<React.ReactNode> = ({ children }) => {
  const style = {};
  const theme = useTheme();
  const classes = useStyles({ theme, ...style });

  return <h2 className={classes.h2}>{children}</h2>;
};

const H3: React.FC<React.ReactNode> = ({ children }) => {
  const style = {};
  const theme = useTheme();
  const classes = useStyles({ theme, ...style });
  return <h3 className={classes.h3}>{children}</h3>;
};

export { H1, H2, H3 };
