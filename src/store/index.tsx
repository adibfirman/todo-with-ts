import React, { Provider } from 'react'

import { TypeValueContext, ActionReducer } from "./index.d.js";

const StoreReact = React.createContext({} as TypeValueContext) 
const initialState: TypeValueContext = {
  list: [],
}

function reducerFunc(state: TypeValueContext, { type, ...actions }: ActionReducer): TypeValueContext  {
  switch (type) {
    case 'SET_TODO_LIST': {
      return {
        ...state,
        list: actions.list
      }
    }
    default:
      return state
  }
}

function Provider({ children }: React.PropsWithChildren<{}>): JSX.Element {
  const [state, dispatch] = React.useReducer(reducerFunc, initialState)

  return <StoreReact.Provider value={{ ...state, dispatch } as TypeValueContext}>{children}</StoreReact.Provider>
}

function useStore(): TypeValueContext {
  const store = React.useContext(StoreReact)

  if (!store) throw new Error('Cannot using store in here')
  return store
}

export { Provider, useStore }
