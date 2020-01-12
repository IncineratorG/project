import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import MainScreen from '../../screens/main/MainScreen';

const MainStack = createStackNavigator({
  Main: {
    screen: MainScreen,
  },
});

const AppNavigation = createAppContainer(MainStack);

export default AppNavigation;
