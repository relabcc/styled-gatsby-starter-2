import React from 'react'
import { FaThumbsUp } from 'react-icons/fa';
import { FormattedMessage } from 'react-intl'

import Layout from '../Layout';
import Counter from '../Counter';
import Container from '../../components/Container'
import Box from '../../components/Box'
import Flex from '../../components/Flex'
import Circle from '../../components/Circle'
import Text from '../../components/Text'
import BackgroundImage from '../../components/BackgroundImage'
import Button from '../../components/Button'
import VerticalCenter from '../../components/VerticalCenter'
import { mobileOrDesktop } from '../../components/ThemeProvider/theme';

import Link from '../../i18n/Link'

import messages from './messages'

const IndexPage = () => (
  <Layout>
    <VerticalCenter>
      <Container py={mobileOrDesktop(0, '2em')}>
        <Flex alignItems="center">
          <Text>
            <FormattedMessage {...messages.header} />
          </Text>
          <Circle width="2em" bg="blue" color="white" display="inline-block" mx="1em" verticalAlign="middle">
            <FaThumbsUp />
          </Circle>
        </Flex>
        <Counter />
        <BackgroundImage my="2em" src="https://loremflickr.com/1920/1080" ratio={9 / 16} />
        <Box mx="-1em">
          <Button m="0.5em" is={Link} to="/about"><FormattedMessage {...messages.about} /></Button>
          <Button.secondary m="0.5em" rightIcon={FaThumbsUp}><FormattedMessage {...messages.good} /></Button.secondary>
          <Button m="0.5em" disabled><FormattedMessage {...messages.bad} /></Button>
        </Box>
      </Container>
    </VerticalCenter>
  </Layout>
)

export default IndexPage
