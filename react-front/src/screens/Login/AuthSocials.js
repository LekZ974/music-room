import React from 'react';

import { StyleSheet, Alert } from 'react-native';
import { lifecycle } from 'recompose';
import { Icon } from 'native-base';

import * as AuthService from '../../services/Auth';
import { Content, ActivityIndicator, Text, CardItem, Card, View } from '../../components';
import I18n from '../../i18n';

import { Theme } from '../../native-base-theme/default_theme';

const styles = StyleSheet.create({
  container: {
    margin: Theme.spacing.tiny,
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  view: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    ...Theme.typography.bolder,
    margin: Theme.spacing.tiny,
    backgroundColor: Theme.palette.secondary,
  },
  title: {
    ...Theme.typography.large,
    margin: Theme.spacing.tiny,
  },
  card: {
    backgroundColor: Theme.palette.ligthPrimary,
    shadowColor: 'transparent',
  },
  cardItem: {
    paddingTop: 0.5 * Theme.spacing.tiny,
    backgroundColor: Theme.palette.ligthPrimary,
  },
  text: {
    ...Theme.typography.small,
  },
});

const withStatus = lifecycle({
  async componentDidMount() {
    this.setState({ ready: true });
  },
});

const AuthSocials = withStatus(props => {
  const { ready, onSubmit } = props;

  if (!ready) {
    return <ActivityIndicator animating />;
  }

  const handleSubmit = platform => {
    switch (platform) {
      case 'facebook':
        AuthService.FacebookLogin().then(data => onSubmit(data));
        break;
      case 'google':
        AuthService.GoogleLogin().then(data => onSubmit(data));
        break;
      default:
        break;
    }
  };

  return (
    <Content>
      <Text style={styles.title}>{I18n.t('login.auth.title')}</Text>
      <Card style={styles.card}>
        <CardItem style={styles.cardItem} bordered button onPress={() => handleSubmit('facebook')}>
          <View style={styles.view}>
            <Icon active={false} name="logo-facebook" />
            <Text style={styles.text}>{I18n.t('login.auth.facebook')}</Text>
          </View>
        </CardItem>
        <CardItem style={styles.cardItem} button bordered onPress={() => handleSubmit('google')}>
          <View style={styles.view}>
            <Icon active={false} name="logo-googleplus" />
            <Text style={styles.text}>{I18n.t('login.auth.google')}</Text>
          </View>
        </CardItem>
        <CardItem
          style={styles.cardItem}
          button
          bordered
          onPress={() =>
            Alert.alert(
              'Deezer',
              'Here a modal to Connect Deezer',
              [
                {
                  text: 'Log me',
                  onPress: () => onSubmit({ email: 'email-with-deezer@toto.com' }),
                },
                {
                  text: 'Cancel',
                  style: 'cancel',
                },
              ],
              { cancelable: false },
            )
          }
        >
          <View style={styles.view}>
            <Icon active={false} type="FontAwesome" name="spotify" />
            <Text style={styles.text}>{I18n.t('login.auth.deezer')}</Text>
          </View>
        </CardItem>
      </Card>
    </Content>
  );
});

export default AuthSocials;
