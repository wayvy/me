const defaultUiState = {
  position: 0,
};

const uiReducer = (state = defaultUiState, action: UiActions): UiState => {
  switch (action.type) {
    case ActionTypes.SCROLL:
      return {
        ...state,
        position: action.payload.position,
      };
    default:
      return state;
  }
};

export { uiReducer, defaultUiState };
