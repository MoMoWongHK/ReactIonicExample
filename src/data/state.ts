import { combineReducers } from './combineReducers';
import { userReducer } from './user/user.reducer';
import { CurrentKOLReducer } from './CurrentKOL/CurrentKOL.reducer';
import {firebaseReducer} from "react-redux-firebase";


export const initialState: AppState = {
  firebase:{} as any,
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
  firebase: firebaseReducer,
  user: userReducer,
  CurrentKOL: CurrentKOLReducer
});

export type AppState = ReturnType<typeof reducers>;
