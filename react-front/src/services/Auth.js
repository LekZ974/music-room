import { Facebook, Google } from 'expo';
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
  const { type, user } = await Google.logInAsync({
    iosClientId: config.google.clientIOSId,
    androidClientId: config.google.clientAndroidId,
    scopes: ['profile', 'email'],
  });

  if (type === 'success') {
    return user;
  }
}

export { FacebookLogin, GoogleLogin };

const AuthService = platform => {
  switch (platform) {
    case 'facebook':
      return FacebookLogin;
    default:
      return {};
  }
};
export default AuthService;
