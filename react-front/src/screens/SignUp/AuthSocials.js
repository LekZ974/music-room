import React from 'react';

import { StyleSheet } from 'react-native';
import { lifecycle } from 'recompose';
import { View, Button, ActivityIndicator, Text } from '../../components';
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
    backgroundColor: '#fff',
    flexDirection: 'row',
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
});

const withStatus = lifecycle({
  async componentDidMount() {
    this.setState({ ready: true });
  },
});

const AuthSocials = withStatus(status => {
  if (!status.ready) {
    return <ActivityIndicator animating />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{I18n.t('login.auth.title')}</Text>
      <View>
        <Button
          label={I18n.t('login.auth.deezer')}
          style={styles.button}
          iconName="spotify"
          iconType="FontAwesome"
          full
        />
      </View>
      <View style={styles.view}>
        <Button
          label={I18n.t('login.auth.facebook')}
          style={styles.button}
          iconName="facebook"
          iconType="FontAwesome"
          full
        />
        <Button
          label={I18n.t('login.auth.google')}
          style={styles.button}
          iconName="google"
          iconType="FontAwesome"
          full
        />
      </View>
      <View style={styles.view}>
        <Button
          label={I18n.t('login.auth.twitter')}
          style={styles.button}
          iconName="twitter"
          iconType="FontAwesome"
          full
        />
        <Button
          label={I18n.t('login.auth.github')}
          style={styles.button}
          iconName="github"
          iconType="FontAwesome"
          full
        />
      </View>
    </View>
  );
});

export default AuthSocials;
