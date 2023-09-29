import React, { FunctionComponent, useDeferredValue, useState } from 'react';
import './index.css';
import { BoardProps, SquareValues } from '../lib/types';
import { Square } from '../square';

export const Board: FunctionComponent<BoardProps> = ({squares, recalculate}) => {
  const [currentSquare, setCurrentSquare] = useState<SquareValues>();
  const deferredCurrentSquare = useDeferredValue(currentSquare);
  const directions: {[key: string]: string} = {
     "99": "left",
     "101": "right",
     "104": "down",
     "96": "up"
  }

  const squareElements = squares.map(square => {
    return (
      <div 
        key={square.key}
        className='base-square' 
        data-column={square.column} 
        data-row={square.row} 
        data-value={square.value}
        onDragEnter={() => dragEnter(square)}
      >
      <Square 
        key={square.key}
        square={square}
        onDragStart={onDrag}
      />
      </div>
    )
  });
  return (
      <div className="grid-container">
          { squareElements }
      </div>
  )

  function dragEnter(square: SquareValues) {
    if (deferredCurrentSquare) {
      const direction = getMoveDirection(deferredCurrentSquare, square);
      if (direction) {
        recalculate(direction);
      }
    }
  }

  function onDrag(currentSquare: SquareValues) {
    setCurrentSquare(currentSquare);
  }
 
  function getMoveDirection(
      currentSquare: SquareValues, square: SquareValues
    ): string | undefined {
      const keyDiff = square.key - currentSquare.key;
      if (keyDiff !== 0 ) {
        return getDirection(keyDiff);
      }
      return;
  }

  function getDirection(diff: number): string {
    const diffKey = (diff + 100).toString();
    return directions[diffKey];
  }
}