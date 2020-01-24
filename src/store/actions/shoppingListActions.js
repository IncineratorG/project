import {
  LOAD_SHOPPING_LIST,
  CREATE_SHOPPING_LIST,
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
      type: CREATE_SHOPPING_LIST,
      payload: shoppingList,
    });
  };
};
