import React from 'react';
import { FormattedMessage } from 'react-intl';

import Container from 'components/Container';
import Link from 'i18n/Link';

import Layout from '../Layout'
import messages from './messages';

const AboutPage = () => (
  <Layout>
    <Container>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
      <p>
        <FormattedMessage {...messages.welcome} />
      </p>
      <Link to="/">
        <FormattedMessage {...messages.backHome} />
      </Link>
    </Container>
  </Layout>
);

export default AboutPage;
