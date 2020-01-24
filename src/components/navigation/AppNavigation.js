import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import MainScreenV3 from '../../screens/main/MainScreenV3';
import MainShoppingListScreen from '../../screens/main/MainShoppingListScreen';
import AddProductScreen from '../../screens/create-shopping-list/AddProductScreen';
import {StyleSheet} from 'react-native';

const MainStack = createStackNavigator({
  'Список покупок': {
    screen: MainShoppingListScreen,
  },
  Редактирование: {
    screen: AddProductScreen,
  },
});

const AppNavigation = createAppContainer(MainStack);

export default AppNavigation;

// screen: MainScreenV3,

