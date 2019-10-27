export type TypeList = Array<{ name: string; checked: boolean }>;

export type ActionReducer =
  | { type: "SET_TODO_LIST"; list: TypeList }
  | { type: "TOGGLE_MARK_TODO"; index: number; isDone: boolean };
export interface TypeValueContext {
  list: TypeList;
  dispatch?({  }: ActionReducer): void;
}
