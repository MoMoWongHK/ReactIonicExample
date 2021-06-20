import {KOLObject} from "../../models/KOL";

export interface standardAction{
  type: string,
  data: any
}

export interface CurrentKOLState {
  kol: KOLObject,
  isCurrentKOLLoaded?: boolean,
}




export const CurrentKOLReducer = (state : CurrentKOLState , action: standardAction) => {
  switch (action.type) {
    case 'set-current-kol-data': {
      return {
        ...state,
        kol: action.data,
        isCurrentKOLLoaded: true
      };
    }
  }
}
