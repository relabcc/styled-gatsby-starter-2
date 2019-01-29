import { defineMessages } from 'react-intl';

export const scope = 'siteMetadata';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Gatsby Styled Starter',
  },
  description: {
    id: `${scope}.description`,
    defaultMessage: 'Styled Components + Styled System is cool!',
  },
});
