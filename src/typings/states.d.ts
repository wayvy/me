import { defaultUiState } from '../store/reducers/uiReducer';
import { defaultAppState } from '../store/reducers/appReducer';
import { rootReducer } from '../store/reducers/rootReducer';

declare global {
  interface ScrollPayload {
    position: number;
  }

  interface InitPayload {
    initAt: Date;
  }

  type RootState = ReturnType<typeof rootReducer>;
  type UiState = typeof defaultUiState;
  type AppState = typeof defaultAppState;
}
