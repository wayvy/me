declare const enum ActionTypes {
  INIT = '@app/INIT',
  SCROLL = '@ui/SCROLL',
}

declare type AppActions = { type: ActionTypes.INIT; payload: InitPayload };

declare type UiActions = { type: ActionTypes.SCROLL; payload: ScrollPayload };
