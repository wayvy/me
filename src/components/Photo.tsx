import React from 'react';
import { useTheme, createUseStyles } from 'react-jss';
import { useSelector, shallowEqual } from 'react-redux';

import photo from '../images/photo.jpg';

const useStyles = createUseStyles((theme: Theme) => ({
  photo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '3rem 0 0 0',
  },
  span: {
    color: theme.backgroundPrimary,
    background: theme.colorSecond,
    padding: props => props.spanPadding,
    borderRadius: '1rem',
    width: props => props.spanWidth,
    textAlign: 'center',
    margin: '0 1rem 1rem 0',
    transition: theme.transition,
    overflow: props => props.spanOverflow,
    position: 'relative',
    '&:after': {
      content: "''",
      position: 'absolute',
      bottom: '0',
      left: '50%',
      width: '0',
      height: '0',
      border: '0.719em solid transparent',
      borderTopColor: '#ffffff',
      borderBottom: '0',
      borderRight: '0',
      marginLeft: '-0.359em',
      marginBottom: '-0.719em',
    },
  },
  photoImg: {
    width: '15rem',
    display: 'block',
    borderRadius: '50%',
    filter: props => props.imgFilter,
    transition: theme.transition,
    margin: '.5rem 0 1rem 0',
  }
}));

const Photo: React.FC = () => {
  const { bottom } = useSelector((state: RootState) => ({ bottom: state.ui.bottom }), shallowEqual );
  const style = {
    spanWidth: '0',
    spanPadding: '0',
    spanOverflow: 'hidden',
    imgFilter: 'grayscale(1)',
  }
  if(bottom){
    style.spanWidth = '15rem';
    style.spanPadding = '1rem';
    style.spanOverflow = 'visible';
    style.imgFilter = 'grayscale(0)';

  }
  const theme = useTheme();
  const classes = useStyles({ theme, ...style });

  return <div className={ classes.photo }>
    <span className={ classes.span }>Hire me!</span>
    <img src={ photo } className={ classes.photoImg } alt='Sergey Gromov'/>
  </div>
}

export { Photo }