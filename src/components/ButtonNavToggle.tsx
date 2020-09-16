import React from 'react';
import { useDispatch } from 'react-redux';
import { useTheme, createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme: Theme) => ({
  buttonNav: {
    border: `${theme.borderThickness} solid ${theme.colorSecond}`,
    borderRadius: theme.borderRadius,
    color: theme.colorSecond,
    background: 'none',
    outline: 'none',
    height: '2rem',
    padding: '0 .5rem',
    cursor: 'pointer',
    transition: theme.transition,
    '&:hover': {
      background: theme.backgroundPrimary,
    }
  },
}));

const ButtonNavToggle = () => {
  const dispatch = useDispatch();
  const handleNavToggle = () => dispatch({ type: ActionTypes.NAV_TOGGLE });

  const style = {};
  const theme = useTheme();
  const classes = useStyles({ theme, ...style });

  return <button onClick={ handleNavToggle } className={ classes.buttonNav }>links</button>
}

export { ButtonNavToggle }
