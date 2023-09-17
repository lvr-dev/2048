import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { getRandomFromLength, getRandomFromTwo } from '../lib/utils';
import { BaseSquares, NonActiveClasses } from '../lib/constants'; 
import { GameControl } from '../gamecontrol';
import { Board } from '../board';

export default function Game() {

  const [running, setRunning] = useState(false);
  const [score, setScore] = useState(0);
  const [grid, setGrid] = useState(initiateGrid);

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
        onDragEnd={ dragEnd }
      /> }
    </div>)

  function initiateGrid() {
    const randomSquareNumber = getRandomFromLength(16);
    const randomFromTwo = getRandomFromTwo();
    return BaseSquares.map(square => {
      if (square.id === randomSquareNumber) {
        square.value = randomFromTwo;
      }
      return square;
    })
  }

  function dragEnd(event: React.MouseEvent, clientX: number, clientY: number): void {
    console.log('drag end', clientX, clientY);
  }

  function startGame(): void {
    setRunning(true);

  }
}
 
const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(<Game />);

