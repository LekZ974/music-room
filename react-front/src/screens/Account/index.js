import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { persistor } from '../../redux/store';
import I18n from '../../i18n';
import { logout } from '../../redux/actions/user';

import { Card, CardItem, Container, Title, View, Button } from '../../components';
import { Theme } from '../../native-base-theme/default_theme';

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Theme.palette.ligthPrimary,
    shadowColor: 'transparent',
  },
  cardItem: {
    backgroundColor: Theme.palette.ligthPrimary,
  },
  button: {
    margin: Theme.spacing.small,
  },
});

const AccountScreen = props => {
  const { navigation, signOut } = props;

  return (
    <Container color="light">
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <View>
          <Title>{I18n.t('account.title')}</Title>
        </View>
        <Card style={styles.card}>
          <CardItem style={styles.cardItem}>
            <Button
              style={styles.button}
              label={I18n.t('account.logout')}
              onPress={() => {
                persistor.purge();
                signOut();
                navigation.navigate('Home');
              }}
              full
              danger
            />
          </CardItem>
        </Card>
      </ScrollView>
    </Container>
  );
};

AccountScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  signOut: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(logout()),
});

export default connect(
  null,
  mapDispatchToProps,
)(AccountScreen);
