import React from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import I18n from '../../../i18n';

import { Container, Title, View, Button } from '../../../components';

const PlayListEditor = props => {
  const { navigation } = props;

  return (
    <Container>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <View>
          <Title>{I18n.t('createRoom.title')}</Title>
          <View>
            <Button
              label={I18n.t('createRoom.back')}
              onPress={() => navigation.navigate('HomeScreen')}
              full
            />
          </View>
        </View>
      </ScrollView>
    </Container>
  );
};

PlayListEditor.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect()(PlayListEditor);
