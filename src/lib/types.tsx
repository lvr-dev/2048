import React from "react";

export interface GameState {
  running: boolean;
  score: number;
  grid: SquareProp[];
}

export interface BoardProps {
  squares: SquareProp[];
  onDragEnd: (event: React.MouseEvent, clientX: number, clientY: number) => void;
}

export interface ColorValues {
  [key:string]: string;
}

export interface SquareProp {
  row: number,
  column: number,
  value: number
}

export type GameControlProps = {
  running: boolean,
  score: number,
  start: () => void
};
