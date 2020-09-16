import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

const useStyles = createUseStyles((theme: Theme) => ({
  a: {
    color: theme.colorPrimary,
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    padding: '.5rem .25rem',
    transition: theme.transition,
    borderRadius: theme.borderRadius,
    fontSize: props => props.size,
    '&:hover': {
      fontWeight: 'bold',
      background: theme.colorPrimary,
      color: theme.backgroundPrimary,
      '&>img': {
        filter: 'invert(100%)',
      },
    },
  },
  img: {
    margin: '0 .5rem 0 0',
    transition: theme.transition,
    height: props => props.size,
  },
  span: {},
}));

const LinkImg: React.FC<LinkImgProps> = ({ href, text, src, alt }) => {
  const style = {
    size: '1.25rem',
  };
  const theme = useTheme();
  const classes = useStyles({ theme, ...style });

  return (
    <a href={href} className={classes.a}>
      <img src={src} alt={alt} className={classes.img} />
      <span className={classes.span}>{text}</span>
    </a>
  );
};

export { LinkImg };
