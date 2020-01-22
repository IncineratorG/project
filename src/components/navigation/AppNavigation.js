import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import MainScreenV3 from '../../screens/main/MainScreenV3';

const MainStack = createStackNavigator({
  Main: {
    screen: MainScreenV3,
  },
});

const AppNavigation = createAppContainer(MainStack);

export default AppNavigation;
