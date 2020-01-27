import {
  LOAD_SHOPPING_LIST,
  ADD_PRODUCT,
  DELETE_ALL,
  DELETE_PRODUCT,
} from '../types/shoppingListActionTypes';

const initialState = {
  productList: [],
};

export const shoppingListReduser = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_SHOPPING_LIST: {
      return {...state, productList: action.payload};
    }
    case ADD_PRODUCT: {
      return {...state, productList: action.payload};
    }
    case DELETE_ALL: {
      return {...state, productList: []};
    }
    case DELETE_PRODUCT: {
      return {...state, productList: action.payload};
    }

    default: {
      return state;
    }
  }
};
