import React, { useState } from "react";
import { useFocus } from "../hooks/useFocus";
import { NewItemButton, NewItemFormContainer, NewItemInput } from "../styles";

// onAdd is a callback passed through AddNewItemProps.
interface NewItemFormProps {
  onAdd(text: string): void;
}

export const NewItemForm = ({ onAdd }: NewItemFormProps) => {
  const [text, setText] = useState("");
  const inputRef = useFocus();

  /** onKeyPress event handler */
  const handleAddText = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onAdd(text);
    }
  };

  return (
    <NewItemFormContainer>
      <NewItemInput
        onChange={(e) => setText(e.target.value)}
        onKeyPress={handleAddText}
        ref={inputRef}
        value={text}
      />
      <NewItemButton onClick={() => onAdd(text)}>Create</NewItemButton>
    </NewItemFormContainer>
  );
};
