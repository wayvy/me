import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

const useStyles = createUseStyles((theme: Theme) => ({
  hr: {
    borderStyle: 'dashed',
  },
}));

const Hr: React.FC = () => {
  const style = {};
  const theme = useTheme();
  const classes = useStyles({ theme, ...style });

  return <hr className={classes.hr} />;
};

export { Hr };
