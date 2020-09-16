const defaultAppState = {
  init: false,
  initAt: new Date(Date.now()),
};

const appReducer = (state = defaultAppState, action: AppActions): AppState => {
  switch (action.type) {
    case ActionTypes.INIT:
      return {
        ...state,
        init: true,
        initAt: action.payload.initAt,
      };
    default:
      return state;
  }
};

export { appReducer, defaultAppState };
