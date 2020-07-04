import React from 'react';

import Container from 'components/Container';
import Link from 'components/Link';

import Layout from '../Layout'

const AboutPage = () => (
  <Layout>
    <Container>
      <h1>
      這是關於頁
      </h1>
      <p>
      歡迎來到這一頁
      </p>
      <Link to="/">
      回到首頁
      </Link>
    </Container>
  </Layout>
);

export default AboutPage;
