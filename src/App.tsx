import React from "react";
import { Card } from "./Card";
import { Column } from "./Column";
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
    </AppContainer>
  );
}

export default App;
