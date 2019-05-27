/*
 * AdminPage Messages
 *
 * This contains all the text for the AdminPage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'AdminPage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: '本區需要登入',
  },
  backHome: {
    id: `${scope}.backHome`,
    defaultMessage: '回到首頁',
  },
  logout: {
    id: `${scope}.logout`,
    defaultMessage: '登出',
  },
});
