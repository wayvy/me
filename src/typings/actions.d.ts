declare const enum ActionTypes {
  INIT = '@app/INIT',
  SCROLL = '@ui/SCROLL',
  NAV_TOGGLE = '@ui/NAV_TOGGLE',
  AT_BOTTOM = '@ui/AT_BOTTOM',
}

declare type AppActions = { type: ActionTypes.INIT; payload: InitPayload };

declare type UiActions =
  | { type: ActionTypes.SCROLL; payload: ScrollPayload }
  | { type: ActionTypes.NAV_TOGGLE }
  | { type: ActionTypes.AT_BOTTOM };
