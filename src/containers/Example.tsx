import React, { useEffect } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { LinkImg } from '../components/LinkImg';

import gitIcon from '../images/git.svg';

const useStyles = createUseStyles((theme: Theme) => ({
  example: {},
  h1: {
    fontSize: '1.5rem',
    padding: '1rem',
    background: theme.colorPrimary,
    color: theme.backgroundPrimary,
    borderRadius: theme.borderRadius,
  },
  h2: {
    fontSize: '1.25rem',
    padding: '.5rem 1rem',
    textAlign: 'center',
  },
}));

const Example: React.FC = () => {
  const { initAt } = useSelector((state: RootState) => ({ initAt: state.app.initAt }), shallowEqual);
  const dispatch = useDispatch();
  useEffect(() => {
    const handleScroll = () => {
      dispatch({
        type: ActionTypes.SCROLL,
        payload: {
          position: window.scrollY,
        },
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  });
  const style = {};
  const theme = useTheme();
  const classes = useStyles({ theme, ...style });

  return (
    <div className={classes.example}>
      <h2 className={classes.h2}>{initAt.toISOString()}</h2>
      <h1 className={classes.h1}>Typed React / Redux / JSS boilerplate</h1>
      <LinkImg
        href="https://github.com/wayvy/typescript-react-redux-jss-boilerplate"
        text="Repository"
        src={gitIcon}
        alt="git"
      />
    </div>
  );
};

export { Example };
