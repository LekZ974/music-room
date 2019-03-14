import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const HomeScreen = props => {
  const { isLogged, navigation } = props;

  navigation.navigate(isLogged ? 'Main' : 'Auth');

  return <React.Fragment />;
};

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  isLogged: PropTypes.bool.isRequired,
};

const mapStateToProps = state => {
  return {
    isLogged: !!state.user.email || !!state.user.name,
  };
};

export default connect(
  mapStateToProps,
  null,
)(HomeScreen);
