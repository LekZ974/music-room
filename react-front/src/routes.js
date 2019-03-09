import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
} from 'react-navigation';
import { Feather as Icon } from '@expo/vector-icons';

import PropTypes from 'prop-types';
import I18n from './i18n';

import AddButton from './components/AddButton';

import AccountScreen from './screens/Account';
import HomeScreen from './screens/Home';
import LoginScreen from './screens/Login';
import ResetPasswordScreen from './screens/Login/ResetPassword';
import SignUpScreen from './screens/SignUp';

const FadeTransition = props => {
  const { position, scene } = props;

  const { index } = scene;

  const translateX = 0;
  const translateY = 0;

  const opacity = position.interpolate({
    inputRange: [index - 0.7, index, index + 0.7],
    outputRange: [0.3, 1, 0.3],
  });

  return {
    opacity,
    transform: [{ translateX }, { translateY }],
  };
};

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
        tabBarLabel: I18n.t('tabBar.home'),
        tabBarIcon: HomeScreenNavIcon,
      }),
    },
    Add: {
      screen: HomeScreen,
      navigationOptions: ({ screenProps }) => ({
        tabBarVisible: !!screenProps.isLogged,
        tabBarLabel: I18n.t('tabBar.home'),
        tabBarIcon: HomeScreenNavIcon,
        tabBarButtonComponent: () => <AddButton />,
      }),
    },
    AccountScreen: {
      screen: AccountScreen,
      navigationOptions: {
        tabBarLabel: I18n.t('tabBar.account'),
        tabBarIcon: ProfileNavIcon,
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: 'rgb(255,255,255)', // color when tab is active
      inactiveTintColor: 'rgb(89, 102, 139)',
      style: {
        backgroundColor: 'rgb(21, 31, 53)',
      },
      showLabel: false, // turn off tab labels
    },
    // defaultNavigationOptions: {
    //   headerStyle: {
    //     backgroundColor: '#f4511e',
    //   },
    //   headerTintColor: '#fff',
    //   headerTitleStyle: {
    //     fontWeight: 'bold',
    //   },
    // },
  },
);

const MainStack = createStackNavigator(
  {
    HomeScreen: HomeStack,
    LoginScreen,
    ResetPasswordScreen,
    SignUpScreen,
  },
  {
    transitionConfig: () => ({
      screenInterpolator: props => {
        return FadeTransition(props);
      },
    }),
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
