import { FunctionComponent } from 'react';
import { SquareProp, SquareValues } from '../lib/types';
import './index.css';


export const Square: FunctionComponent<SquareProp> = ({square, onDragStart}) => {
  const squareClass = `color-${square.value} inner-square`;
  
  return (
        <div 
          draggable
          className={squareClass} 
          data-row={square.row} 
          data-column={square.column}  
          data-value={square.value}
          onDragStart={() => drag(square)}
        >
          <span>{square.value}</span>
      </div>
    );

  function drag(square: SquareValues): void {
    onDragStart(square);
  }
}

