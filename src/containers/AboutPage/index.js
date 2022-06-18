import { Button } from '@chakra-ui/button';
import { Container, Stack } from '@chakra-ui/layout';
import React from 'react';

import Link from 'components/Link';

const AboutPage = () => (
  <Container as={Stack}>
    <h1>
      這是關於頁
    </h1>
    <p>
      歡迎來到這一頁
    </p>
    <div>
      <Button as={Link} to="/">
        回到首頁
      </Button>
    </div>
  </Container>
);

export default AboutPage;
