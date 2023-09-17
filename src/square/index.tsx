import { FunctionComponent } from 'react';
import { SquareProp } from '../lib/types';
import './index.css';


export const Square: FunctionComponent<SquareProp> = ({row, column, value}) => {
  const squareClass = `color-${value} inner-square`;
  return (
      <div className='base-square' data-column={column} data-row={row} data-value={value}>
          { value > 0 &&
           <div 
              draggable
              className={squareClass} 
              data-row={row} 
              data-column={column}  
              data-value={value}
            >
              <span>{value}</span>
          </div>
          }
      </div>
    );
}

