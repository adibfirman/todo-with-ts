type ListType = Array<{ id: number, name: string, checked: boolean }>

export interface TypeValueContext {
  list: ListType,
}

export type ActionReducer =
  | { type: 'SET_TODO_LIST', list: ListType }
