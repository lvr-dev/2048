import { traverseArray } from './utils';
import * as testValues from './utils.testvalues';

describe('traverseArray', () => {
  test('single value moved from begin to end', () => {
    const result = traverseArray(testValues.array1);
    expect(result).toEqual(testValues.array1Expected);
  });

  test('two adjacent equal values added and moved to end', () => {
    const result = traverseArray(testValues.array2);
    expect(result).toEqual(testValues.array2Expected);
  });

  test('two adjacent equal values added, one other adjacent value, moved to end', () => {
    const result = traverseArray(testValues.array3);
    expect(result).toEqual(testValues.array3Expected);
  });

  test('two adjacent equal values added, one other non adjacent value, moved to end', () => {
    const result = traverseArray(testValues.array4);
    expect(result).toEqual(testValues.array4Expected);
  });
})