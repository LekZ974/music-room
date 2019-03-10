import React from 'react';
import { Platform } from 'react-native';

import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
  createMaterialTopTabNavigator,
} from 'react-navigation';
import { Feather as Icon } from '@expo/vector-icons';

import PropTypes from 'prop-types';
import I18n from './i18n';

import { Theme } from './native-base-theme/default_theme';

import { AddButton, Logo } from './components';

import AccountScreen from './screens/Account';
import HomeScreen from './screens/Home';
import LoginScreen from './screens/Login';
import ResetPasswordScreen from './screens/Login/ResetPassword';
import SignUpScreen from './screens/SignUp';
import MusicTrackVoteScreen from './screens/CreateRoom/MusicTrackVote';
import PlayListEditorScreen from './screens/CreateRoom/PlayListEditor';

import MR_LOGO_TITLE from '../assets/logo-title.png';

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
    navigationOptions: () => ({
      headerTitle: I18n.t('createRoom.title'),
    }),
  },
);

const HomeStack = createBottomTabNavigator(
  {
    Home: {
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
    Account: {
      screen: AccountScreen,
      navigationOptions: {
        tabBarLabel: I18n.t('tabBar.account'),
        tabBarIcon: ProfileNavIcon,
      },
    },
  },
  {
    navigationOptions: () => ({
      headerTitle: () => <Logo sm source={MR_LOGO_TITLE} />,
      headerStyle: {
        backgroundColor: Theme.palette.sidebar,
      },
    }),
    tabBarOptions: {
      activeTintColor: Theme.palette.secondary,
      inactiveTintColor: Theme.palette.borderColor,
      style: {
        backgroundColor: Theme.palette.primary,
      },
      showLabel: false,
    },
  },
);

const MainStack = createStackNavigator(
  {
    Home: HomeStack,
    Login: {
      screen: LoginScreen,
      navigationOptions: () => ({
        headerTitle: I18n.t('login.title'),
      }),
    },
    ResetPassword: {
      screen: ResetPasswordScreen,
      navigationOptions: () => ({
        headerTitle: I18n.t('resetPassword.title'),
      }),
    },
    SignUp: {
      screen: SignUpScreen,
      navigationOptions: () => ({
        headerTitle: I18n.t('signUp.title'),
      }),
    },
    CreateRoom: CreateRoomStack,
  },
  {
    transitionConfig: () => ({
      screenInterpolator: props => {
        return FadeTransition(props);
      },
    }),
    initialRouteName: 'HomeScreen',
    headerMode: Platform.OS === 'ios' ? 'float' : 'screen',
    headerLayoutPreset: 'center',
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
