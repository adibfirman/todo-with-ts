export type TypeList = Array<{ name: string; checked: boolean }>;

export type ActionReducer = { type: "SET_TODO_LIST"; list: TypeList };
export interface TypeValueContext {
  list: TypeList;
  dispatch?({  }: ActionReducer): void;
}
