import { createContext } from 'react';

export default createContext({
  hideHeader: false,
  headerHeight: '5em',
  setHideHeader: () => {},
})
