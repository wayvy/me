import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, shallowEqual } from 'react-redux';
import { useTheme, createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme: Theme) => ({
  navList: {
    height: props => props.height,
    listStyle: 'none',
    textAlign: 'center',
    margin: '0',
    padding: '0',
    overflowX: 'hidden',
    overflowY: 'scroll',
    transition: theme.transition,
    background: theme.colorPrimaryAlt,
  },
  navItem: {
    borderTop: `${theme.borderThickness} solid ${theme.backgroundPrimary}`,
    '&:hover': {
      background: theme.backgroundPrimary,
    },
  },
  navLink: {
    display: 'block',
    width: '100%',
    padding: '1rem .25rem',
    color: theme.colorSecond,
    textDecoration: 'none',
  },
  navLinkSpan: {
    borderBottom: `${theme.borderThickness} dashed ${theme.colorSecond}`,
  },
  closeArea: {
    height: '100vh',
    width: '100vw',
    position: 'fixed',
    cursor: 'pointer',
  }
}));

const Nav: React.FC = () => {
  const { navToggle } = useSelector((state: RootState) => ({ navToggle: state.ui.navToggle }), shallowEqual );

  const style = { height: '0' }
  if (navToggle) style.height = '7.5rem';

  const theme = useTheme();
  const classes = useStyles({ theme, ...style });

  return <nav>
    <ul className={ classes.navList }>
      <li className={ classes.navItem }>
        <NavLink to='/' className={ classes.navLink }>
          <span className={ classes.navLinkSpan }>Home</span>
        </NavLink>
      </li>
      <li className={ classes.navItem }>
        <NavLink to='/about' className={ classes.navLink }>
          <span className={ classes.navLinkSpan }>About</span>
        </NavLink>
      </li>
    </ul>
  </nav>
}

export { Nav }
