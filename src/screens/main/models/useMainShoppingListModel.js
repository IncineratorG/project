import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {LoadShoppingList} from '../../../store/actions/shoppingListActions';
import {
  PRODUCT_COMPLETED,
  PRODUCT_NOT_COMPLETED,
} from '../../../storage/data/ProductStatus';

export const useMainShoppingListModel = ({navigation}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(LoadShoppingList());
  }, [dispatch]);

  const shoppingListLoading = useSelector(
    state => state.shoppingList.productList.loading,
  );
  let shoppingList = useSelector(state => state.shoppingList.productList.data);
  shoppingList.sort((s1, s2) => {
    return s2 > s1;
  });

  const completedShoppingList = shoppingList.filter(
    product => product.status === PRODUCT_COMPLETED,
  );
  const notCompletedShoppingList = shoppingList.filter(
    product => product.status === PRODUCT_NOT_COMPLETED,
  );

  return {
    data: {
      shoppingListLoading,
      shoppingList,
      completedShoppingList,
      notCompletedShoppingList,
    },
    setters: {},
    navigation,
    dispatch,
  };
};
