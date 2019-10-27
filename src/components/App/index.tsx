import "./styles.css";

import React from "react";
import { useStore } from "../../store";
import { TypeList } from "../../store/index.d.js";

function App(): JSX.Element {
  const { list, dispatch } = useStore();
  const [text, setText] = React.useState("");

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.keyCode === 13) {
      const copyList = [...list] as TypeList;
      copyList.unshift({
        name: text,
        checked: false
      });

      setText("");
      dispatch && dispatch({ type: "SET_TODO_LIST", list: copyList });
    }
  }

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  function handleClick(key: number) {
    return () => {
      const copyList = [...list];
      const checkedOrNot = !copyList[key].checked;

      dispatch &&
        dispatch({
          type: "TOGGLE_MARK_TODO",
          index: key,
          isDone: checkedOrNot
        });
    };
  }

  return (
    <main>
      <input
        value={text}
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
        type="text"
        name="text"
      />
      <ul>
        {list.map((item, i) => (
          <li key={i.toString()} onClick={handleClick(i)}>
            {item.name}, is done? {JSON.stringify(item.checked)}
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
