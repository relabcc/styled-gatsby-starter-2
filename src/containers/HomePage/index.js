import React from 'react'
import { FaThumbsUp } from 'react-icons/fa';
import { FormattedMessage } from 'react-intl'

import Container from 'components/Container'
import Box from 'components/Box'
import Flex from 'components/Flex'
import Circle from 'components/Circle'
import Text from 'components/Text'
import BackgroundImage from 'components/BackgroundImage'
import Button from 'components/Button'
import FullpageVerticalCenter from 'components/FullpageVerticalCenter'
import { responsive } from 'components/ThemeProvider/theme';

import Link from 'i18n/Link'

import useResponsive from 'contexts/mediaQuery/useResponsive'
import Layout from '../Layout';
import messages from './messages'

const IndexPage = () => {
  const { isMobile } = useResponsive()
  return (
    <Layout>
      <FullpageVerticalCenter>
        <Container py={responsive(0, '2em')}>
          <Flex alignItems="center">
          <Text fontSize={responsive('1em', '1.5em')} color={responsive('red', 'green')}>
              <FormattedMessage {...messages.header} />
              {isMobile && 'Mobile'}
            </Text>
            <Circle width="2em" bg="blue" color="white" display="inline-block" mx="1em" verticalAlign="middle">
              <FaThumbsUp />
            </Circle>
          </Flex>
          <BackgroundImage my="2em" src="https://loremflickr.com/1920/1080" ratio={9 / 16} />
          <Box mx="-1em">
            <Button m="0.5em" as={Link} to="/about"><FormattedMessage {...messages.about} /></Button>
            <Button.Secondary m="0.5em" rightIcon={FaThumbsUp}><FormattedMessage {...messages.good} /></Button.Secondary>
            <Button m="0.5em" disabled><FormattedMessage {...messages.bad} /></Button>
          </Box>
        </Container>
      </FullpageVerticalCenter>
    </Layout>
  )
}

export default IndexPage
