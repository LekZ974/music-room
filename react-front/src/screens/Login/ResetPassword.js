import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { StyleSheet } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { Container, Content, Title, Button, TextInput } from '../../components';
import { resetPassword } from '../../redux/actions/user';

import I18n from '../../i18n';

import { Theme } from '../../native-base-theme/default_theme';

const styles = StyleSheet.create({
  button: {
    marginTop: Theme.spacing.small,
  },
});

let ResetPassword = props => {
  const { handleSubmit, reset, navigation } = props;

  const resetPwd = email => {
    reset(email);
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <Container center>
      <KeyboardAwareScrollView enableOnAndroid>
        <Content>
          <Title>{I18n.t('resetPassword.title')}</Title>
          <Field
            keyboardType="email-address"
            autoCapitalize="none"
            name="email"
            autoCorrect={false}
            placeholder={I18n.t('resetPassword.email')}
            component={TextInput}
          />
          <Button
            style={styles.button}
            label={I18n.t('resetPassword.validate')}
            onPress={handleSubmit(resetPwd)}
            success
            full
          />
          <Button label={I18n.t('resetPassword.cancel')} onPress={goBack} full light />
        </Content>
      </KeyboardAwareScrollView>
    </Container>
  );
};

ResetPassword.defaultProps = {
  initialValues: {},
};

ResetPassword.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.shape({
    email: PropTypes.string,
  }),
  reset: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = state => {
  if (
    Object.prototype.hasOwnProperty.call(state.form, 'login') &&
    Object.prototype.hasOwnProperty.call(state.form.login, 'values')
  ) {
    return {
      initialValues: { email: state.form.login.values.email && state.form.login.values.email },
    };
  }
  return {};
};

const mapDispatchToProps = dispatch => ({
  reset: user => dispatch(resetPassword(user)),
});

ResetPassword = reduxForm({
  form: 'resetPassword',
})(ResetPassword);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResetPassword);
