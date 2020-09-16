import React, { useEffect } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Main } from './containers/Main';
import { About } from './containers/About';

import { Init } from './components/Init';
import { Header } from './components/Header';
import { Nav } from './components/Nav';

const useStyles = createUseStyles((theme: Theme) => ({
  app: {},
}));

const App: React.FC = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    const handleScroll = () => {
      dispatch({ type: ActionTypes.SCROLL, payload: { position: window.scrollY } });
      
      let scrollTop = document.documentElement.scrollTop;
      let offsetHeight = document.documentElement.offsetHeight;
      // Safari fix
      if(scrollTop === 0 || offsetHeight === 0){
        scrollTop = document.body.scrollTop;
        offsetHeight = document.body.offsetHeight
      }
      const offset = scrollTop + window.innerHeight;
      if (offset + 200 >= offsetHeight) { dispatch({ type: ActionTypes.AT_BOTTOM }) };
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const style = {};
  const theme = useTheme();
  const classes = useStyles({ theme, ...style });

  return (
    <div className={classes.app}>
      <Init />

      <Header/>
      <Nav/>

      <Switch>
        <Route exact path="/" component={ Main } />
        <Route path="/about" component={ About } />
      </Switch>
    </div>
  );
};

console.log('HIRE ME!');
console.log('📩  📩  📩');
console.log('sendtogromov@gmail.com');

export { App };
