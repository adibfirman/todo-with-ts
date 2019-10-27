import React from "react";

import { TypeValueContext, ActionReducer } from "./index.d.js";

const StoreReact = React.createContext({} as TypeValueContext);
const initialState: TypeValueContext = {
  list: [{ name: "Learning TypeScript", checked: true }]
};

function reducerFunc(
  state: TypeValueContext,
  actions: ActionReducer
): TypeValueContext {
  switch (actions.type) {
    case "SET_TODO_LIST": {
      return {
        ...state,
        list: actions.list
      };
    }
    case "TOGGLE_MARK_TODO": {
      const copyList = [...state.list];
      const { index, isDone } = actions;

      copyList[index].checked = isDone;

      return {
        ...state,
        list: copyList
      };
    }
    default:
      return state;
  }
}

function Provider({ children }: React.PropsWithChildren<{}>): JSX.Element {
  const [state, dispatch] = React.useReducer(reducerFunc, initialState);

  return (
    <StoreReact.Provider value={{ ...state, dispatch }}>
      {children}
    </StoreReact.Provider>
  );
}

function useStore(): TypeValueContext {
  const store = React.useContext(StoreReact);

  if (!store) throw new Error("Cannot using store in here");
  return store;
}

export { Provider, useStore };
