import React from "react";

export interface GameState {
  running: boolean;
  score: number;
  grid: SquareProp[];
}

export interface BoardProps {
  squares: SquareValues[];
  recalculate: (direction: string) => void;
}

export interface ColorValues {
  [key:string]: string;
}

export interface SquareValues {
  key: number,
  row: number,
  column: number,
  value: number,
}
export interface SquareProp {
  square: SquareValues,
  onDragStart: (square: SquareValues) => void;
}

export type GameControlProps = {
  running: boolean,
  score: number,
  start: () => void
};
