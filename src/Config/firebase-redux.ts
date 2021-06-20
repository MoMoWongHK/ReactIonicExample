import {combineReducers, createStore} from "redux";
import firebase from "./firebase";
import rootReducer from "../redux/reducer/coreReducer";

const initialState ={}
const store = createStore(rootReducer,initialState)
const rrfConfig ={

}

const rrfProps ={
  firebase,
  config: rrfConfig,
  dispatch:store.dispatch
}

export function getReduxStore() {
  return store
}

export function getRrfProp() {
  return rrfProps
}
