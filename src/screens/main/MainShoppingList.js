import React from 'react';
import {mainShoppingListStyles} from './styles/mainShoppingListStyles';
import {mainShoppingListController} from './controllers/mainShoppingListController';
import {useMainShoppingListModel} from './models/useMainShoppingListModel';
import {MainShoppingListView} from './views/MainShoppingListView';

export const MainShoppingList = ({navigation}) => {
  const stylesParameter = mainShoppingListStyles;
  const modelParameter = useMainShoppingListModel({navigation});
  const controllerParameter = mainShoppingListController(modelParameter);

  return (
    <MainShoppingListView
      styles={stylesParameter}
      model={modelParameter}
      controller={controllerParameter}
    />
  );
};

MainShoppingList.navigationOptions = ({navigation}) => ({
  headerTitle: 'Список покупок',
});
