import React from 'react';
import { useDispatch } from 'react-redux';

const Init: React.FC = () => {
  const dispatch = useDispatch();
  dispatch({
    type: ActionTypes.INIT,
    payload: {
      initAt: new Date(Date.now()),
    },
  });
  return <></>;
};

export { Init };
