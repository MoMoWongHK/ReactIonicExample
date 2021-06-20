import { combineReducers } from './combineReducers';
import { userReducer } from './user/user.reducer';
import { CurrentKOLReducer } from './CurrentKOL/CurrentKOL.reducer';



export const initialState: AppState = {
  user: {
    hasSeenTutorial: false,
    darkMode: false,
    isLoggedin: false,
    loading: false
  },
  CurrentKOL:{
    kol: {} as any,
    isCurrentKOLLoaded: false
  }
};

export const reducers = combineReducers({
  user: userReducer,
  CurrentKOL: CurrentKOLReducer
});

export type AppState = ReturnType<typeof reducers>;
