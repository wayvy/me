import React from 'react';
import { useTheme, createUseStyles } from 'react-jss';

const useStyles = createUseStyles(theme => ({
  h2: {
    padding: '0 1rem',
    margin: '6rem 0 2rem 0',
    fontSize: '3rem',
    fontWeight: 'bolder',
  }
}));

const H2: React.FC<React.ReactNode> = ({ children }) => {
  const style = {};
  const theme = useTheme();
  const classes = useStyles({ theme, ...style });

  return <h2 className={ classes.h2 }>{ children }</h2>
}

export { H2 }
