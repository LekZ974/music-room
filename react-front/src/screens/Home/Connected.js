import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import { Container, Content, Text } from '../../components';

import I18n from '../../i18n';

const ConnectedScreen = ({ name }) => (
  <Container color="primary" linearGradient>
    <Content>
      <Text>{I18n.t('home.content', { name })}</Text>
    </Content>
  </Container>
);

ConnectedScreen.propTypes = {
  name: PropTypes.string.isRequired,
};

const mapStateToProps = state => {
  return {
    name: state.user.name,
  };
};

export default connect(
  mapStateToProps,
  null,
)(ConnectedScreen);
