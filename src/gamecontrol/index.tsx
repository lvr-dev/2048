import React, { FunctionComponent } from 'react';
import { GameControlProps} from '../lib/types';
import './index.css';


export const GameControl: FunctionComponent<GameControlProps> = ({running, score, start}) =>
  running ? (
      <div className="score-board">
        <span>{score}</span>
      </div>
      ) : (
        <button onClick={ () => start() }>START</button>
      )

