import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
} from 'react-navigation';
import { Feather as Icon } from '@expo/vector-icons';

import PropTypes from 'prop-types';

import AccountScreen from './screens/Account';
import HomeScreen from './screens/Home';
import LoginScreen from './screens/Login';
import SignUpScreen from './screens/SignUp';

function HomeScreenNavIcon({ tintColor }) {
  return <Icon name="home" size={22} color={tintColor} />;
}

HomeScreenNavIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

function ProfileNavIcon({ tintColor }) {
  return <Icon name="user" size={30} color={tintColor} />;
}

ProfileNavIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

const HomeStack = createBottomTabNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: ({ screenProps }) => ({
        tabBarVisible: !!screenProps.isLogged,
        tabBarLabel: 'Home',
        tabBarIcon: HomeScreenNavIcon,
      }),
    },
    Profile: {
      screen: AccountScreen,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ProfileNavIcon,
      },
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

const MainStack = createStackNavigator(
  {
    HomeScreen: HomeStack,
    LoginScreen,
    SignUpScreen,
  },
  {
    initialRouteName: 'HomeScreen',
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
