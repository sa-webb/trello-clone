import React, { useRef } from "react";
import { AddNewItem } from "./AddNewItem";
import { ColumnContainer, ColumnTitle } from "../styles";
import { useAppState } from "../context";
import { Card } from "./Card";
import { useItemDrag } from "../hooks/useItemDrag";
import { useDrop } from "react-dnd";
import { DragItem } from "../types/DragItem";
import { isHidden } from "../utils/isHidden";

interface ColumnProps {
  title: string;
  index: number;
  id: string;
}

export const Column: React.FC<ColumnProps> = ({ title, index, id }) => {
  const { state, dispatch } = useAppState();
  const [, drop] = useDrop({
    accept: "COLUMN",
    hover(item: DragItem) {
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      dispatch({ type: "MOVE_LIST", payload: { dragIndex, hoverIndex } });
      item.index = hoverIndex;
    },
  });

  // specify drag target
  const ref = useRef<HTMLDivElement>(null);

  // return the drag function that passes the object to the hook
  const { drag } = useItemDrag({ type: "COLUMN", id, index, title });

  // pass the object to the hook
  drag(drop(ref));

  return (
    <ColumnContainer
      ref={ref}
      isHidden={isHidden(state.draggedItem, "COLUMN", id)}
    >
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
