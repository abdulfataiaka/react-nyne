import { random, range, arraySubsets, verify } from '../../helpers';

describe('Helpers: index', () => {
  it('should output a random number not 6', () => {
    let rand = random(6); rand = random(6);
    expect(rand).not.toBe(6);
  });

  it('should return array [1, 2, 3, 4] as range', () => {
    expect(range(1, 4)).toEqual([1,2,3,4]);
  });

  it('should return powerset form of array', () => {
    expect(arraySubsets([1,2, 3])).toEqual(
      [ [1,2], [1,3], [1,2,3], [2,3] ]
    );
  });

  it('should verify that selection does not give stars count', () => {
    expect(verify([ 5, 2 ], 6)).toBe(false);
  });

  it('should verify that selection gives stars count', () => {
    expect(verify([ 5, 2 ], 7)).toBe(true);
  });

});
