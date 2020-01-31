import {
  LOAD_SHOPPING_LIST,
  ADD_PRODUCT,
  DELETE_ALL,
  DELETE_PRODUCT,
  CHANGE_STATUS,
  LOAD_PRODUCT_START,
  LOAD_PRODUCT_FINISH,
  LOAD_PRODUCT_ERROR,
  UPDATE_PRODUCT,
} from '../types/shoppingListActionTypes';

const initialState = {
  productList: {
    loading: false,
    data: [],
    error: '',
  },
  editingProduct: {
    loading: false,
    product: null,
    error: '',
  },
};

export const shoppingListReduser = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_SHOPPING_LIST: {
      return {
        ...state,
        productList: {...state.productList, data: action.payload},
      };
    }
    case ADD_PRODUCT: {
      return {
        ...state,
        productList: {...state.productList, data: action.payload},
      };
    }
    case DELETE_ALL: {
      return {...state, productList: {...state.productList, data: []}};
    }
    case DELETE_PRODUCT: {
      return {
        ...state,
        productList: {...state.productList, data: action.payload},
      };
    }
    case CHANGE_STATUS: {
      return {
        ...state,
        productList: {...state.productList, data: action.payload},
      };
    }
    case LOAD_PRODUCT_START: {
      return {
        ...state,
        editingProduct: {
          ...state.editingProduct,
          loading: true,
          error: '',
          product: null,
        },
      };
    }
    case LOAD_PRODUCT_FINISH: {
      return {
        ...state,
        editingProduct: {
          ...state.editingProduct,
          loading: false,
          product: action.payload,
          error: '',
        },
      };
    }
    case LOAD_PRODUCT_ERROR: {
      return {
        ...state,
        editingProduct: {
          ...state.editingProduct,
          loading: false,
          error: action.payload,
        },
      };
    }
    case UPDATE_PRODUCT: {
      return {
        ...state,
        productList: {...state.productList, data: action.payload},
      };
    }
    default: {
      return state;
    }
  }
};
