import {
  LOAD_SHOPPING_LIST,
  ADD_PRODUCT,
  DELETE_ALL,
  DELETE_PRODUCT,
} from '../types/shoppingListActionTypes';
import {SqliteStorageShoppingList} from '../../storage/SqliteStorageShoppingList';

export const LoadShoppingList = () => {
  return async dispatch => {
    const shoppingListData = await SqliteStorageShoppingList.loadProducts();
    console.log(shoppingListData.length);

    const shoppingList = [];
    for (let i = 0; i < shoppingListData.length; ++i) {
      shoppingList.push(shoppingListData.item(i));
    }
    dispatch({
      type: LOAD_SHOPPING_LIST,
      payload: shoppingList,
    });
  };
};

export const addProduct = ({
  productNameValue,
  countValue,
  countTypeValue,
  noteValue,
}) => {
  return async dispatch => {
    await SqliteStorageShoppingList.addProduct({
      productName: productNameValue,
      count: countValue,
      countType: countTypeValue,
      note: noteValue,
    });
    const shoppingListData = await SqliteStorageShoppingList.loadProducts();
    console.log(shoppingListData.length);

    const shoppingList = [];
    for (let i = 0; i < shoppingListData.length; ++i) {
      shoppingList.push(shoppingListData.item(i));
    }
    dispatch({
      type: ADD_PRODUCT,
      payload: shoppingList,
    });
  };
};

export const deleteAllProducts = () => {
  return async dispatch => {
    await SqliteStorageShoppingList.deleteAll();
    dispatch({
      type: DELETE_ALL,
    });
  };
};

export const deleteProduct = id => {
  return async dispatch => {
    const numberOfDeletedValues = await SqliteStorageShoppingList.deleteProduct(
      id,
    );

    const shoppingListData = await SqliteStorageShoppingList.loadProducts();

    const shoppingList = [];
    for (let i = 0; i < shoppingListData.length; ++i) {
      shoppingList.push(shoppingListData.item(i));
    }
    dispatch({
      type: DELETE_PRODUCT,
      payload: shoppingList,
    });
  };
};
