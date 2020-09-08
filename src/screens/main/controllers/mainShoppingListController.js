import {Alert} from 'react-native';
import {
  changeStatusProduct,
  deleteAllProducts,
  deleteProduct,
  loadProduct,
} from '../../../store/actions/shoppingListActions';
import {
  PRODUCT_COMPLETED,
  PRODUCT_NOT_COMPLETED,
} from '../../../storage/data/ProductStatus';

export const mainShoppingListController = model => {
  const deleteAllHandler = () => {
    Alert.alert(
      'Удаление всего списка',
      'Вы действительно хотите полностью удалить список?',
      [
        {text: 'Нет'},
        {text: 'Да', onPress: () => model.dispatch(deleteAllProducts())},
      ],
      {cancelable: true},
    );
    // dispatch(deleteAllProducts());
  };

  const addProductHandler = () => {
    model.navigation.navigate('AddProduct');
  };

  const changeStatusHandler = listItem => {
    let newStatus = PRODUCT_NOT_COMPLETED;
    if (listItem.status === PRODUCT_NOT_COMPLETED) {
      newStatus = PRODUCT_COMPLETED;
    }
    model.dispatch(changeStatusProduct(newStatus, listItem.id));
  };

  const editingHandler = listItem => {
    model.dispatch(loadProduct(listItem.id));
    model.navigation.navigate('EditScreen');
  };

  const deleteHandler = listItem => {
    model.dispatch(deleteProduct(listItem.id));
  };

  return {
    editingHandler,
    deleteHandler,
    changeStatusHandler,
    deleteAllHandler,
    addProductHandler,
  };
};
