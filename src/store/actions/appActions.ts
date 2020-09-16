export const init = (payload: InitPayload): AppActions => {
  return { type: ActionTypes.INIT, payload };
};
