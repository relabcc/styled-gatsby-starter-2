import React from 'react';

import Container from '../components/Container';
import Link from '../components/Link';
import withLayout from '../hoc/withLayout';

const AboutPage = () => (
  <Container>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Container>
);

export default withLayout(AboutPage);
