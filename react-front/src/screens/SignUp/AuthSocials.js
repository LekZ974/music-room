import React from 'react';

import { StyleSheet } from 'react-native';
import { lifecycle } from 'recompose';
import { Right, Icon } from 'native-base';
import { Content, ActivityIndicator, Text, CardItem, Card } from '../../components';
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
    margin: Theme.spacing.small,
  },
  cardItem: {
    paddingTop: 0.5 * Theme.spacing.tiny,
    paddingBottom: 0.5 * Theme.spacing.tiny,
    backgroundColor: Theme.palette.secondary,
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

const AuthSocials = withStatus(status => {
  if (!status.ready) {
    return <ActivityIndicator animating />;
  }

  return (
    <Content>
      <Text style={styles.title}>{I18n.t('login.auth.title')}</Text>
      <Card>
        <CardItem
          style={styles.cardItem}
          bordered
          button
          onPress={() => alert('Here a modal to Connect Facebook')}
        >
          <Icon active name="logo-facebook" />
          <Text style={styles.text}>{I18n.t('login.auth.facebook')}</Text>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </CardItem>
        <CardItem
          style={styles.cardItem}
          bordered
          button
          onPress={() => alert('Here a modal to Connect Google')}
        >
          <Icon active name="logo-googleplus" />
          <Text style={styles.text}>{I18n.t('login.auth.google')}</Text>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </CardItem>
        <CardItem
          style={styles.cardItem}
          bordered
          button
          onPress={() => alert('Here a modal to Connect Twitter')}
        >
          <Icon active name="logo-twitter" />
          <Text style={styles.text}>{I18n.t('login.auth.twitter')}</Text>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </CardItem>
        <CardItem
          style={styles.cardItem}
          bordered
          button
          onPress={() => alert('Here a modal to Connect Github')}
        >
          <Icon active name="logo-github" />
          <Text style={styles.text}>{I18n.t('login.auth.github')}</Text>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </CardItem>
        <CardItem
          style={styles.cardItem}
          bordered
          button
          onPress={() => alert('Here a modal to Connect Deezer')}
        >
          <Icon active type="FontAwesome" name="spotify" />
          <Text style={styles.text}>{I18n.t('login.auth.deezer')}</Text>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </CardItem>
      </Card>
    </Content>
  );
});

export default AuthSocials;
