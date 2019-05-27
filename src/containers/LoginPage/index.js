import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import { selectFirebase } from '../../services/firebase/selectors';
import Container from '../../components/Container';
import Button from '../../components/Button';
import messages from './messages';

class LoginPage extends React.PureComponent {
  login = () => {
    const { firebase } = this.props;
    firebase.login({ provider: 'google' });
  }

  render() {
    const { auth: { isLoaded } } = this.props;
    return (
      <Container py="1em">
        <Button disabled={!isLoaded} onClick={this.login}>
          <FormattedMessage {...messages.login} />
        </Button>
      </Container>
    );
  }
}

LoginPage.propTypes = {
  firebase: PropTypes.shape({
    login: PropTypes.func,
  }),
  auth: PropTypes.shape({
    isLoaded: PropTypes.bool,
  }),
};

export default selectFirebase(['auth'])(LoginPage);
