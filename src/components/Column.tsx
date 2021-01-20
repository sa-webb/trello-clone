import React from "react";
import { AddNewItem } from "./AddNewItem";
import { ColumnContainer, ColumnTitle } from "../styles";
import { useAppState } from "../context";
import { Card } from "./Card";

interface ColumnProps {
  title: string;
  index: number;
  id: string;
}

export const Column: React.FC<ColumnProps> = ({ title, index, id }) => {
  const { state, dispatch } = useAppState();

  return (
    <ColumnContainer>
      <ColumnTitle>{title}</ColumnTitle>
      {state.lists[index].tasks.map((task, i) => (
        <Card text={task.text} key={task.id} index={i} />
      ))}
      <AddNewItem
        dark
        toggleButtonText="+ Add another card"
        onAdd={(text) =>
          dispatch({ type: "ADD_TASK", payload: { text, listId: id } })
        }
      />
    </ColumnContainer>
  );
};
