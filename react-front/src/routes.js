import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './screens/Home';
import LoginPage from './screens/Login';

const MainStack = createStackNavigator(
  {
    Home,
    LoginPage,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  },
);

const RootStack = createStackNavigator(
  {
    Main: MainStack,
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);

export default createAppContainer(RootStack);
