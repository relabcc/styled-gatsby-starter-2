import styled from '@emotion/styled';

import Box from './Box';
import { responsive } from './ThemeProvider/theme';

export const containerWidth = ["26em", "44em", "58em", "76em"];
export const containerPadding = responsive('1em', '2em')

const Container = styled(Box)``

Container.defaultProps = {
  mx: 'auto',
  px: containerPadding,
  maxWidth: containerWidth,
};

Container.displayName = 'Container';

export default Container;
