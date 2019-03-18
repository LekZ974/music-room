import { Facebook, Google, AuthSession } from 'expo';
import { Alert } from 'react-native';
import config from '../../config';

async function FacebookLogin() {
  try {
    const {
      type,
      token,
      // expires,
      // permissions,
      // declinedPermissions,
    } = await Facebook.logInWithReadPermissionsAsync(config.facebook.appId, {
      permissions: ['public_profile', 'email'],
      behavior: 'native',
    });

    switch (type) {
      case 'success': {
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
        return await response.json();
      }
      case 'cancel': {
        Alert.alert('Cancelled!', 'Login was cancelled!');
        break;
      }
      default: {
        Alert.alert('Oops!', 'Login failed!');
      }
    }
  } catch ({ message }) {
    Alert.alert(`Facebook Login Error: ${message}`);
  }
}

async function GoogleLogin() {
  try {
    const { type, user } = await Google.logInAsync({
      iosClientId: config.google.clientIOSId,
      androidClientId: config.google.clientAndroidId,
      scopes: ['profile', 'email'],
    });

    switch (type) {
      case 'success': {
        return user;
      }
      case 'cancel': {
        Alert.alert('Cancelled!', 'Login was cancelled!');
        break;
      }
      default: {
        Alert.alert('Oops!', 'Login failed!');
      }
    }
  } catch ({ message }) {
    Alert.alert(`Google Login Error: ${message}`);
  }
}

async function DeezerLogin() {
  try {
    const redirectUrl = AuthSession.getRedirectUrl();
    const { type, params } = await AuthSession.startAsync({
      authUrl:
        `https://connect.deezer.com/oauth/auth.php?` +
        `app_id=${config.deezer.appId}` +
        `&redirect_uri=${encodeURIComponent(redirectUrl)}` +
        `&perms=basic_access,email`,
    });
    switch (type) {
      case 'success': {
        const accessToken = await fetch(
          `https://connect.deezer.com/oauth/access_token.php?` +
            `app_id=${config.deezer.appId}` +
            `&secret=${config.deezer.appSecret}` +
            `&code=${params.code}`,
        );
        /* eslint no-underscore-dangle: ["error", { "allow": ["_bodyInit"] }] */
        let token = accessToken._bodyInit.split('&')[0];
        token = token.substring(token.lastIndexOf('=') + 1);
        const response = await fetch(`https://api.deezer.com/user/me?access_token=${token}`);
        return await response.json();
      }
      case 'cancel': {
        Alert.alert('Cancelled!', 'Login was cancelled!');
        break;
      }
      default: {
        Alert.alert('Oops!', 'Login failed!');
      }
    }
  } catch ({ message }) {
    Alert.alert(`Deezer Login Error: ${message}`);
  }
}

export { FacebookLogin, GoogleLogin, DeezerLogin };

const AuthService = platform => {
  switch (platform) {
    case 'facebook':
      return FacebookLogin;
    case 'google':
      return GoogleLogin;
    case 'deezer':
      return DeezerLogin;
    default:
      return {};
  }
};
export default AuthService;
