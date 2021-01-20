import React from "react";
import { Card } from "./components/Card";
import { Column } from "./components/Column";
import { AddNewItem } from "./components/AddNewItem";
import { AppContainer } from "./styles";

function App() {
  return (
    <AppContainer>
      <Column title="To Do">
        <Card text="Generate app scaffold" />
      </Column>
      <Column title="In Progress">
        <Card text="Learn Typescript" />
      </Column>
      <Column title="Done">
        <Card text="Begin to use static typing" />
      </Column>
      <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log} />
    </AppContainer>
  );
}

export default App;
