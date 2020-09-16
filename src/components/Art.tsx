import React from 'react';
import { useTheme, createUseStyles } from 'react-jss';
import { useSelector, shallowEqual } from 'react-redux';

import shape from '../images/shape.svg';
import triangle from '../images/triangle.svg';
import rectangle from '../images/rectangle.svg';
import circle from '../images/circle.svg';

const useStyles = createUseStyles((theme: Theme) => ({
  art: {
    position: 'fixed',
    width: '100vw',
    height: '100vh',
    top: '0',
    left: '0',
    zIndex: '-1',
  },
  circle: {
    position: 'absolute',
    zIndex: '-1',
    top: '50vh',
    left: '35vw',
    width: props => `calc(30vw + ${props.scrollPosition}px)`,
    height: props => `calc(30vh + ${props.scrollPosition}px)`,
  },
  triangle: {
    position: 'absolute',
    zIndex: '-2',
    top: props => `calc(20vh + ${Math.cbrt(props.scrollPosition) * 10}px)`,
    left: props => `calc(50vw + ${Math.cbrt(props.scrollPosition) * 50}px)`,
    width: props => `calc(30vw - ${props.scrollPosition / 5}px)`,
    height: props => `calc(30vh - ${props.scrollPosition / 5}px)`,
    transform: props => `rotate( ${130 - props.scrollPosition / 5}deg )`,
  },
  rectangle: {
    position: 'absolute',
    zIndex: '-3',
    top: '50vh',
    left: '-20vw',
    width: props => `calc(80vw - ${props.scrollPosition}px)`,
    height: '80vh',
    transform: props => `rotate( ${70 + props.scrollPosition / 10}deg )`,
  },
  shape: {
    position: 'absolute',
    zIndex: '-4',
    top: props => `calc(-130vh + ${props.scrollPosition}px)`,
    left: '-20vw',
    width: '200vw',
    height: '200vh',
  },
}));

const Art: React.FC = () => {
  const { scrollPosition } = useSelector((state: RootState) => ({ scrollPosition: state.ui.position }), shallowEqual);
  const style = { scrollPosition: scrollPosition };
  const theme = useTheme();
  const classes = useStyles({ theme, ...style });

  return (
    <div className={classes.art}>
      <img src={circle} className={classes.circle} alt="circle" />
      <img src={triangle} className={classes.triangle} alt="triangle" />
      <img src={rectangle} className={classes.rectangle} alt="rectangle" />
      <img src={shape} className={classes.shape} alt="shape" />
    </div>
  );
};

export { Art };
