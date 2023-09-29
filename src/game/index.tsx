import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { 
  getKeyRandomAvailable,
  getRandomFromLength, 
  getRandomFromTwo, 
  calculateGrid 
} from '../lib/utils';
import { BaseSquares } from '../lib/constants'; 
import { GameControl } from '../gamecontrol';
import { Board } from '../board';
import { SquareValues } from '../lib/types';

const cloneDeep = require('lodash/cloneDeep');

export default function Game() {

  const [running, setRunning] = useState(false);
  const [score, setScore] = useState(0);
  const [grid, setGrid] = useState(initiateGrid());

  return (<div className="wrapper">
      <div className="score-banner">
       <GameControl 
          running= { running }
          score={ score } 
          start={ startGame }
        />
      </div>
      {<
      Board 
        squares={ grid }
        recalculate={resetGrid}
      /> }
    </div>)

  function initiateGrid() {
    const randomSquareNumber = getRandomFromLength(16);
    const randomFromTwo = getRandomFromTwo();
    return BaseSquares.map(square => {
      if (square.key === randomSquareNumber) {
        square.value = randomFromTwo;
      }
      return square;
    })
  }


  function setNewValue(squares: SquareValues[]) {
    const randomKey = getKeyRandomAvailable(squares);
    if (randomKey !== 0) {
      return squares.map(square => {
        if (square.key === randomKey) {
          square.value = getRandomFromTwo();
        }
        return square;
      });
    }
    setRunning(false);
    return squares;  
  }

  function startGame(): void {
    setRunning(true);
  }

  function resetGrid(direction: string): void { 
    recalculateGrid(direction);
  }

  function recalculateGrid(direction: string) {
    const gridClone = cloneDeep(grid);
    const recalculatedGrid = calculateGrid(gridClone, direction);
    setGrid(recalculatedGrid);
    setNewValue(recalculatedGrid);
  }

}
 
const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(<Game />);

