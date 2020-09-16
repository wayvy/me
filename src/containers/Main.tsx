import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

const useStyles = createUseStyles((theme: Theme) => ({
  main: {},
}));

const Main: React.FC = () => {
  const style = {};
  const theme = useTheme();
  const classes = useStyles({ theme, ...style });

  return <div className={classes.main}></div>;
};

export { Main };
