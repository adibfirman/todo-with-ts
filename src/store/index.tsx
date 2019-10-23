import React, { Provider } from 'react'

import { TypeValueContext } from "./index.d.js";

const StoreReact = React.createContext({} as TypeValueContext) 

function Provider({ children }: React.PropsWithChildren<{}>): JSX.Element {
  return <StoreReact.Provider value={}>{children}</StoreReact.Provider>
}

function useStore(): TypeValueContext {
  const store = React.useContext(StoreReact)

  if (!store) throw new Error('Cannot using store in here')
  return store
}

export { Provider, useStore }
