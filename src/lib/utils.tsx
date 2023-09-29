import { SquareValues } from "./types";


export const getRandomFromLength = (max: number) => Math.floor(Math.random() * max + 1);

export const getRandomFromTwo = () => (Math.random()) > 0.5 ? 2 : 4;

export const getKeyRandomAvailable = (grid: Array<SquareValues>): number => {
  const availableSquares = grid.filter(square => square.value === 0);
  if (availableSquares.length) {
     const randomIndex = getRandomFromLength(availableSquares.length); 
     return availableSquares[randomIndex].key;
  }
  return 0;
}

export const getSquareValues = (square: SquareValues): SquareValues => {
  const value = getRandomFromTwo();
  return {
    ...square,
    value
  }
}

function getMoveMethod(direction: string) {
  const movementFactory: {[key: string]: (grid: SquareValues[], element: number) => SquareValues[]} = {
    'left': function(grid, element) { return moveLeft(grid, element) },
    'right': function(grid, element) { return moveRight(grid, element) },
    'up': function(grid, element) { return moveUp(grid, element) },
    'down': function(grid, element) { return moveDown(grid, element) }
  };

 return movementFactory[direction];

}

function moveLeft(grid: SquareValues[], element: number): SquareValues[] {
  return grid.filter((item) => item.row === element).reverse();
}

function moveRight(grid: SquareValues[], element: number): SquareValues[] {
  return grid.filter((item) => item.row === element);
}

function moveUp(grid: SquareValues[], element: number): SquareValues[] {
  return grid.filter((item) => item.column === element).reverse();
}

function moveDown(grid: SquareValues[], element: number): SquareValues[] {
  return grid.filter((item) => item.column === element);
}

export function traverseArray(arr: SquareValues[]): SquareValues[] {
  const valuesAdded = addEquals(arr);
  return moveValues(valuesAdded);
}

function addEquals(arr: SquareValues[]) {
  return arr.map((item, index, elements) => {
    const next = elements[index+1];
    const previous = elements[index-1];
    if (item.value !== 0 && next && next.value == item.value) {
      next.value = next.value + item.value;
      item.value = previous ? previous.value : 0;
      return item;
    }
    return item;
  });
}

function moveZeroValues(arr: SquareValues[]) {
   return arr.map((item, index, elements) => {
      const next = elements[index+1];
      if (item.value !== 0 && next && next.value === 0) {
        next.value = item.value;
        item.value = 0
        return item;
      } 
      return item;
    });
}

function moveValues(arr: SquareValues[]) {
  const values = arr.map(item => item.value);
  const zeroValues = values.filter(item => item === 0);
  const nonZeroValues = values.filter(item => item !== 0);
  const rearrangedValues = [...zeroValues, ...nonZeroValues];
  return arr.map((item, index) => {
    item.value = rearrangedValues[index];
    return item;
  });
}

export function calculateGrid(grid: SquareValues[], direction: string) {
  let recalculated: SquareValues[][] = [];
   for (let i = 1; i <= 4; i++) {
    const moveTo = getMoveMethod(direction);
    const arr = moveTo(grid, i);
    const traversedArray = traverseArray(arr);
    recalculated.push(traversedArray);
  }
  return recalculated.flat().sort((a, b) => a.key - b.key);
}

