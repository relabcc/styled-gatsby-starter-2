import React from 'react';
import { FormattedMessage } from 'react-intl';

import Container from 'components/Container';
import Box from 'components/Box';

import Link from 'i18n/Link';
import messages from './messages';

const AdminPage = () => (
  <Container>
    <h1>
      <FormattedMessage {...messages.header} />
    </h1>
    <Box my="1em">
      <Link to="/admin/logout/">
        <FormattedMessage {...messages.logout} />
      </Link>
    </Box>
    <Box my="1em">
      <Link to="/">
        <FormattedMessage {...messages.backHome} />
      </Link>
    </Box>
  </Container>
);

export default AdminPage;
