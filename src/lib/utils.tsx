import { SquareProp } from "./types";
import { ColorValueClasses, BaseSquares } from './constants';

export const getXYPosition = (value: number): SquareProp => BaseSquares[--value];

export const getRandomFromLength = (length: number) => Math.floor(Math.random() * length);

export const getRandomFromTwo = () => (Math.random()) > 0.5 ? 2 : 4;

const getColorValueClass = (value: number): string => ColorValueClasses[value.toString()];  


export const getRandomAvailable = (gridValues: Array<SquareProp>, length: number) => {
  const randomAvailable = gridValues[getRandomFromLength(length)];
  return getSquareValues(randomAvailable);
}

export const getSquareValues = (square: SquareProp): SquareProp => {
  const value = getRandomFromTwo();
  const cssClass = getColorValueClass(value);
  return {
    ...square,
    value
  }
}