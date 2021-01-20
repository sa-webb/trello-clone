import React, { useRef } from "react";
import { useDrop } from "react-dnd";
import { AddNewItem } from "./AddNewItem";
import { ColumnContainer, ColumnTitle } from "../styles";
import { useAppState } from "../context";
import { Card } from "./Card";
import { useItemDrag } from "../hooks/useItemDrag";
import { DragItem } from "../types/DragItem";
import { isHidden } from "../utils/isHidden";

interface ColumnProps {
  title: string;
  index: number;
  id: string;
  isPreview?: boolean;
}

export const Column: React.FC<ColumnProps> = ({
  title,
  index,
  id,
  isPreview,
}) => {
  const { state, dispatch } = useAppState();
  // specify drag target
  const ref = useRef<HTMLDivElement>(null);
  
  const [, drop] = useDrop({
    accept: ["COLUMN", "CARD"],
    hover(item: DragItem) {
      if (item.type === "COLUMN") {
        const dragIndex = item.index
        const hoverIndex = index

        if (dragIndex === hoverIndex) {
          return
        }

        dispatch({ type: "MOVE_LIST", payload: { dragIndex, hoverIndex } })
        item.index = hoverIndex
      } else {
        const dragIndex = item.index
        const hoverIndex = 0
        const sourceColumn = item.columnId
        const targetColumn = id

        if (sourceColumn === targetColumn) {
          return
        }

        dispatch({
          type: "MOVE_TASK",
          payload: { dragIndex, hoverIndex, sourceColumn, targetColumn }
        })

        item.index = hoverIndex
        item.columnId = targetColumn
      }
    }
  })

  // return the drag function that passes the object to the hook
  const { drag } = useItemDrag({ type: "COLUMN", id, index, title });

  // pass the object to the hook
  drag(drop(ref));

  return (
    <ColumnContainer
      isPreview={isPreview}
      ref={ref}
      isHidden={isHidden(isPreview, state.draggedItem, "COLUMN", id)}
    >
      <ColumnTitle>{title}</ColumnTitle>
      {state.lists[index].tasks.map((task, i) => (
        <Card
          id={task.id}
          columnId={id}
          key={task.id}
          index={i}
          text={task.text}
        />
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
