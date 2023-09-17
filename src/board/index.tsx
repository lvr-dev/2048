import React, { FunctionComponent } from 'react';
import './index.css';
import { BoardProps } from '../lib/types';
import { Square } from '../square';


export const Board: FunctionComponent<BoardProps> = ({squares, onDragEnd }) => {
  let clientX: number;
  let clientY: number;

  const squareElements = squares.map(square => {
    return (
      <Square 
        value={square.value}
        row={square.row}
        column={square.column}
      />
    )
  });
  return (
      <div className="grid-container" 
          onDragStart={(event) => onDragStart(event)}
          onDragEnd={(event) => onDragEnd(event, clientX, clientY)}
      >
          { squareElements }
      </div>
  )
  

  function onDragStart(event: React.MouseEvent) {
    console.log('on drag start');
    clientX = event.clientX;
    clientY = event.clientY;
  }
}