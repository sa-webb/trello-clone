import React from "react";
import { ColumnContainer, ColumnTitle } from "./styles";

interface IProps {
  title: string;
  children: React.ReactNode;
}

export const Column: React.FC<IProps> = ({ title, children }) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{title}</ColumnTitle>
      {children}
    </ColumnContainer>
  );
};
