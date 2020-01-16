import {
  SAVE_VALUES,
  SHOW_VALUES,
  DELETE_RECORD,
} from '../types/projectActionTypes';

const initialState = {
  id: -1,
  dataBaseData: {},
  lastRemovedId: 0,
};

export const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_VALUES: {
      return {...state, id: action.payload};
    }

    case SHOW_VALUES: {
      return {...state, dataBaseData: action.payload};
    }

    case DELETE_RECORD: {
      return {...state, lastRemovedId: action.payload};
    }

    default: {
      return state;
    }
  }
};
