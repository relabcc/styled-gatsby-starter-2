import PropTypes from 'prop-types';
import styled from 'styled-components';

import Box from './Box';
import injectProps from './utils/injectProps';

const BackgroundImage = styled(Box)`
  position: relative;
  background-image: url(${({ src }) => src});
  ${injectProps('backgroundImage')}
  ${injectProps('backgroundPosition')}
  background-repeat: no-repeat;
  ${(props) => props.height ? '' : `padding-top: ${props.ratio * 100}%;`}
`;

BackgroundImage.propTypes = {
  src: PropTypes.string,
  backgroundImage: PropTypes.string,
  backgroundPosition: PropTypes.string,
};

BackgroundImage.defaultProps = {
  ratio: 1,
  backgroundImage: 'cover',
  backgroundPosition: '50% 50%',
};

BackgroundImage.displayName = 'BackgroundImage';

export default BackgroundImage;
