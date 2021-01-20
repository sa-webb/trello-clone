import React from "react";
import { AddNewItem } from "./AddNewItem";
import { ColumnContainer, ColumnTitle } from "../styles";
import { useAppState } from "../context";
import { Card } from "./Card";

interface IProps {
  title: string;
  index: number;
}

export const Column: React.FC<IProps> = ({ title, index }) => {
  const { state } = useAppState();
  return (
    <ColumnContainer>
      <ColumnTitle>{title}</ColumnTitle>
      {state.lists[index].tasks.map(task => (
        <Card text={task.text} key={task.id} />
      ))}
      <AddNewItem
        toggleButtonText="+ Add another task"
        onAdd={console.log}
        dark
      />
    </ColumnContainer>
  );
};
