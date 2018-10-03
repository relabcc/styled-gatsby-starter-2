import React from 'react';

import Layout from '../containers/Layout'
import Container from '../components/Container';
import Link from '../components/Link';

const AboutPage = () => (
  <Layout>
    <Container>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </Container>
  </Layout>
);

export default AboutPage;
