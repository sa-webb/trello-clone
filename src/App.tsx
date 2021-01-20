import React from "react";
import { Column } from "./components/Column";
import { AddNewItem } from "./components/AddNewItem";
import { AppContainer } from "./styles";
import { useAppState } from "./context";

function App() {
  const { state, dispatch } = useAppState();

  return (
    <AppContainer>
      {state.lists.map((list, i) => (
        <Column title={list.text} key={list.id} index={i} id={list.id} />
      ))}
      <AddNewItem
        toggleButtonText="+ Add another list"
        onAdd={(text) => dispatch({ type: "ADD_LIST", payload: text })}
      />
    </AppContainer>
  );
}

export default App;
