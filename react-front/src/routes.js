import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
} from 'react-navigation';
import { Feather as Icon } from '@expo/vector-icons';

import PropTypes from 'prop-types';
import I18n from './i18n';

import { Theme } from './native-base-theme/default_theme';

import AddButtonIos from './components/AddButtonForIos';
import AddButtonAndroid from './components/AddButtonForAndroid';

import AccountScreen from './screens/Account';
import HomeScreen from './screens/Home';
import LoginScreen from './screens/Login';
import ResetPasswordScreen from './screens/Login/ResetPassword';
import SignUpScreen from './screens/SignUp';
import CreateRoomScreen from './screens/CreateRoom';

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

const HomeStack = Platform.select({
  ios: createBottomTabNavigator(
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
          tabBarButtonComponent: () => <AddButtonIos />,
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
        activeTintColor: Theme.palette.secondary,
        inactiveTintColor: Theme.palette.borderColor,
        style: {
          backgroundColor: Theme.palette.primary,
        },
        showLabel: false,
      },
    },
  ),
  android: createBottomTabNavigator(
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
          tabBarButtonComponent: () => <AddButtonAndroid />,
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
        activeTintColor: Theme.palette.secondary,
        inactiveTintColor: Theme.palette.borderColor,
        style: {
          backgroundColor: Theme.palette.primary,
        },
        showLabel: false,
      },
    },
  ),
});

const MainStack = createStackNavigator(
  {
    HomeScreen: HomeStack,
    LoginScreen,
    ResetPasswordScreen,
    SignUpScreen,
    CreateRoomScreen,
  },
  {
    transitionConfig: () => ({
      screenInterpolator: props => {
        return FadeTransition(props);
      },
    }),
    initialRouteName: 'HomeScreen',
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
