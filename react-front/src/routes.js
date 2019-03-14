import React from 'react';
import { Platform } from 'react-native';

import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
  createMaterialTopTabNavigator,
  createSwitchNavigator,
} from 'react-navigation';
import { Feather as Icon } from '@expo/vector-icons';

import PropTypes from 'prop-types';
import I18n from './i18n';

import { Theme } from './native-base-theme/default_theme';

import { AddButton, Logo } from './components';

import AccountScreen from './screens/Account';
import ConnectedScreen from './screens/Home/Connected';
import HomeScreen from './screens/Home';
import NotConnectedScreen from './screens/Home/NotConnected';
import LoginScreen from './screens/Login';
import ResetPasswordScreen from './screens/Login/ResetPassword';
import SignUpScreen from './screens/SignUp';
import MusicTrackVoteScreen from './screens/CreateRoom/MusicTrackVote';
import PlayListEditorScreen from './screens/CreateRoom/PlayListEditor';

import MR_LOGO_TITLE from '../assets/logo-title.png';

const tabBarTopNavigationOptions = {
  activeTintColor: Theme.palette.secondary,
  inactiveTintColor: Theme.palette.ligthPrimary,
  showIcon: true,
  style: {
    backgroundColor: Theme.palette.darkPrimary,
    zIndex: 100,
    top: 0,
    left: 0,
    right: 0,
    border: 0,
    shadowColor: 'transparent',
  },
  indicatorStyle: {
    backgroundColor: Theme.palette.secondary,
  },
};

const headerTitleStyle = {
  color: Theme.palette.ligthPrimary,
  textTransform: 'uppercase',
};

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

function IconHandler({ name, tintColor }) {
  return <Icon name={name} size={22} color={tintColor} />;
}

IconHandler.propTypes = {
  tintColor: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

const CreateRoomStack = createMaterialTopTabNavigator(
  {
    MusicTrackVote: {
      screen: MusicTrackVoteScreen,
      navigationOptions: () => ({
        title: I18n.t('createRoom.musicTrackVote.title'),
      }),
    },
    PlayListEditor: {
      screen: PlayListEditorScreen,
      navigationOptions: () => ({
        title: I18n.t('createRoom.playListEditor.title'),
      }),
    },
  },
  {
    tabBarOptions: tabBarTopNavigationOptions,
    navigationOptions: () => ({
      headerTitle: I18n.t('createRoom.title'),
      headerStyle: {
        backgroundColor: Theme.palette.darkPrimary,
        shadowColor: 'transparent',
        elevation: 0,
        borderBottomWidth: 0,
      },
      headerTitleStyle,
    }),
  },
);

const ManageRoomStack = createMaterialTopTabNavigator(
  {
    ManageUserRooms: {
      screen: ConnectedScreen,
      navigationOptions: () => ({
        tabBarLabel: I18n.t('home.manageUserRooms.title'),
        tabBarIcon: ({ tintColor }) => IconHandler({ tintColor, name: 'activity' }),
      }),
    },
    SearchRooms: {
      screen: ConnectedScreen,
      navigationOptions: () => ({
        tabBarLabel: I18n.t('home.searchRooms.title'),
        tabBarIcon: ({ tintColor }) => IconHandler({ tintColor, name: 'search' }),
      }),
    },
  },
  {
    tabBarOptions: tabBarTopNavigationOptions,
    navigationOptions: ({ screenProps }) => ({
      tabBarVisible: !!screenProps.isLogged,
      tabBarLabel: I18n.t('tabBar.home'),
      tabBarIcon: ({ tintColor }) => IconHandler({ tintColor, name: 'home' }),
    }),
  },
);

const HomeStack = createBottomTabNavigator(
  {
    HomeApp: ManageRoomStack,
    Add: {
      screen: ConnectedScreen,
      navigationOptions: () => ({
        tabBarButtonComponent: () => <AddButton />,
      }),
    },
    Account: {
      screen: AccountScreen,
      navigationOptions: {
        tabBarLabel: I18n.t('tabBar.account'),
        tabBarIcon: ({ tintColor }) => IconHandler({ tintColor, name: 'user' }),
      },
    },
  },
  {
    navigationOptions: () => ({
      headerTitle: () => <Logo sm source={MR_LOGO_TITLE} />,
      headerStyle: {
        backgroundColor: Theme.palette.darkPrimary,
        shadowColor: 'transparent',
        elevation: 0,
        borderBottomWidth: 0,
      },
    }),
    tabBarOptions: {
      activeTintColor: Theme.palette.secondary,
      inactiveTintColor: Theme.palette.ligthPrimary,
      style: {
        backgroundColor: Theme.palette.darkPrimary,
      },
      showLabel: false,
    },
  },
);

const MainStack = createStackNavigator(
  {
    HomeApp: HomeStack,
    CreateRoom: CreateRoomStack,
  },
  {
    transitionConfig: () => ({
      screenInterpolator: props => {
        return FadeTransition(props);
      },
    }),
    headerMode: Platform.OS === 'ios' ? 'float' : 'screen',
    headerLayoutPreset: 'center',
    navigationOptions: () => ({
      headerStyle: {
        backgroundColor: Theme.palette.darkPrimary,
      },
    }),
  },
);

const LoginStack = createStackNavigator(
  {
    HomeAuth: {
      screen: NotConnectedScreen,
      navigationOptions: () => ({
        headerTitle: I18n.t('notConnected.title'),
        headerStyle: {
          backgroundColor: Theme.palette.darkPrimary,
          shadowColor: 'transparent',
          elevation: 0,
          borderBottomWidth: 0,
        },
        headerTitleStyle,
      }),
    },
    Login: {
      screen: LoginScreen,
      navigationOptions: () => ({
        headerTitle: I18n.t('login.title'),
        headerStyle: {
          backgroundColor: Theme.palette.darkPrimary,
          shadowColor: 'transparent',
          elevation: 0,
          borderBottomWidth: 0,
        },
        headerTitleStyle,
      }),
    },
    ResetPassword: {
      screen: ResetPasswordScreen,
      navigationOptions: () => ({
        headerTitle: I18n.t('resetPassword.title'),
        headerStyle: {
          backgroundColor: Theme.palette.darkPrimary,
          shadowColor: 'transparent',
          elevation: 0,
          borderBottomWidth: 0,
        },
        headerTitleStyle,
      }),
    },
    SignUp: {
      screen: SignUpScreen,
      navigationOptions: () => ({
        headerTitle: I18n.t('signUp.title'),
        headerStyle: {
          backgroundColor: Theme.palette.darkPrimary,
          shadowColor: 'transparent',
          elevation: 0,
          borderBottomWidth: 0,
        },
      }),
    },
  },
  {
    transitionConfig: () => ({
      screenInterpolator: props => {
        return FadeTransition(props);
      },
    }),
    headerMode: Platform.OS === 'ios' ? 'float' : 'screen',
    headerLayoutPreset: 'center',
  },
);

const RootStack = createSwitchNavigator(
  {
    Home: HomeScreen,
    Main: MainStack,
    Auth: LoginStack,
  },
  {
    initialRouteName: 'Home',
    mode: 'modal',
    headerMode: 'none',
  },
);

export default createAppContainer(RootStack);
