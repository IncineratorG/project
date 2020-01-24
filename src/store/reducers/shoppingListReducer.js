import {
  LOAD_SHOPPING_LIST,
  ADD_PRODUCT,
} from '../types/shoppingListActionTypes';

const initialState = {
  allShoppingLists: [],
  id: -1,
  dataBaseData: {},
  lastRemovedId: 0,
  updatingStatus: 'COMPLETE',
  lastVal: {},
};

export const shoppingListReduser = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_SHOPPING_LIST: {
      return {...state, allShoppingLists: action.payload};
    }
    case ADD_PRODUCT: {
      return {...state, allShoppingLists: action.payload};
    }

    default: {
      return state;
    }
  }
};
