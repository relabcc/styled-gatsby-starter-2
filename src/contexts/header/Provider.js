import React, { useState } from 'react';

import Context from './context'

export const headerHeight = '5em'

const Provider = ({ children }) => {
  const [hideHeader, setHideHeader] = useState()
  return (
    <Context.Provider value={{ hideHeader, setHideHeader, headerHeight }}>
      {children}
    </Context.Provider>
  )
}

export default Provider;
