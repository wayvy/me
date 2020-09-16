const defaultUiState = {
  position: 0,
  navToggle: false,
  bottom: false,
};

const uiReducer = (state = defaultUiState, action: UiActions): UiState => {
  switch (action.type) {
    case ActionTypes.SCROLL:
      return {
        ...state,
        position: action.payload.position,
      };
    case ActionTypes.NAV_TOGGLE:
        return {
          ...state,
          navToggle: !state.navToggle
        }
    case ActionTypes.AT_BOTTOM:
      return {
        ...state,
        bottom: true
      }
    default:
      return state;
  }
};

export { uiReducer, defaultUiState };
