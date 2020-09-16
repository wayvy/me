import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme, createUseStyles } from 'react-jss';

import { H1 } from './Typographics';
import { ButtonNavToggle } from './ButtonNavToggle';

import logo from '../images/logo.svg';

const useStyles = createUseStyles((theme: Theme) => ({
  header: {
    padding: '0 1rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: theme.colorPrimary,
  },
  logo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoLink: {
    height: '2rem',
    margin: '0 1rem 0 0',
  },
  logoImg: {
    transition: theme.transition,
    borderRadius: '50%',
    '&:hover': {
      transform: 'rotate(315deg) scale(1.25)',
      background: theme.backgroundPrimary,
    },
  },
}));

const Header: React.FC = () => {
  const style = {};
  const theme = useTheme();
  const classes = useStyles({ theme, ...style });

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <NavLink to="/" className={classes.logoLink}>
          <img src={logo} className={classes.logoImg} alt="wayvy" />
        </NavLink>

        <H1>Wayvy</H1>
      </div>
      <ButtonNavToggle />
    </header>
  );
};

export { Header };
