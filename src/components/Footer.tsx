import React from 'react';
import { useTheme, createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme: Theme) => ({
  footer: {
    padding: '0 1rem',
    margin: '2rem auto',
    maxWidth: theme.maxWidth,
  },
  mailto: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    fontStyle: 'italic',
    textDecoration: 'none',
    borderBottom: `${theme.borderThickness} dashed ${theme.colorSecond}`,
    '&:hover': {
      color: theme.colorPrimary,
      borderBottom: `${theme.borderThickness} dashed ${theme.colorPrimary}`,
    },
  },
  author: {
    fontSize: '1.25rem',
  },
  year: {
    fontSize: '1rem',
  },
}));

const Footer = () => {
  const style = {};
  const theme = useTheme();
  const classes = useStyles({ theme, ...style });

  return (
    <footer className={classes.footer}>
      <div className="copyright">
        <a href={`mailto:sendtogromov@gmail.com`} className={classes.mailto}>
          {`<sendtogromov@gmail.com>`}
        </a>
        <div className={classes.author}>Sergey Gromov</div>
        <div className={classes.year}>2020</div>
      </div>
    </footer>
  );
};

export { Footer };
