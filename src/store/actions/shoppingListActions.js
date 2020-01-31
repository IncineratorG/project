import {
  LOAD_SHOPPING_LIST,
  ADD_PRODUCT,
  DELETE_ALL,
  DELETE_PRODUCT,
  CHANGE_STATUS,
  LOAD_PRODUCT_START,
  LOAD_PRODUCT_ERROR,
  LOAD_PRODUCT_FINISH,
  UPDATE_PRODUCT,
} from '../types/shoppingListActionTypes';
import {SqliteStorageShoppingList} from '../../storage/SqliteStorageShoppingList';

export const LoadShoppingList = () => {
  return async dispatch => {
    const shoppingListData = await SqliteStorageShoppingList.loadProductsList();
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
    const shoppingListData = await SqliteStorageShoppingList.loadProductsList();

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

    const shoppingListData = await SqliteStorageShoppingList.loadProductsList();

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

export const changeStatusProduct = (status, id) => {
  return async dispatch => {
    // обращаемся к базе данных для изменения статуса у элементов с определенным id
    const updatedRows = await SqliteStorageShoppingList.changeProductStatus(
      status,
      id,
    );
    // обновляем данные в базе данных
    const shoppingListData = await SqliteStorageShoppingList.loadProductsList();

    const shoppingList = [];
    for (let i = 0; i < shoppingListData.length; ++i) {
      shoppingList.push(shoppingListData.item(i));
    }
    dispatch({
      type: CHANGE_STATUS,
      payload: shoppingList,
    });
  };
};

export const updateProduct = (id, name, count, countType, note) => {
  return async dispatch => {
    await SqliteStorageShoppingList.updateProduct(
      id,
      name,
      count,
      countType,
      note,
    );

    const shoppingListData = await SqliteStorageShoppingList.loadProductsList();

    const shoppingList = [];
    for (let i = 0; i < shoppingListData.length; ++i) {
      shoppingList.push(shoppingListData.item(i));
    }
    dispatch({
      type: UPDATE_PRODUCT,
      payload: shoppingList,
    });
  };
};

export const loadProduct = id => {
  return async dispatch => {
    dispatch({
      type: LOAD_PRODUCT_START,
    });

    try {
      const loadetProductData = await SqliteStorageShoppingList.loadProduct(id);
      if (loadetProductData.length > 0) {
        const product = loadetProductData.item(0);
        dispatch({
          type: LOAD_PRODUCT_FINISH,
          payload: product,
        });
      } else {
        dispatch({
          type: LOAD_PRODUCT_ERROR,
          payload: 'Внимание! Элемент не найден!',
        });
      }
    } catch (e) {
      dispatch({type: LOAD_PRODUCT_ERROR, payload: e});
    }
  };
};
