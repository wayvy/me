import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

const useStyles = createUseStyles((theme: Theme) => ({
  about: {},
}));

const About: React.FC = () => {
  const style = {};
  const theme = useTheme();
  const classes = useStyles({ theme, ...style });

  return <div className={classes.about}></div>;
};

export { About };
