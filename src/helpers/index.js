/**
 * 
 * 
 * @description generate random number in range [1, 9]
 * 
 * @name random
 */
export const random = (diffnum = null) => {
  let number, index;

  if (!diffnum) {
    return Math.floor(Math.random() * 9) + 1;
  }

  for (index=0; index<=5; index++) {
    number = Math.floor(Math.random() * 9) + 1;
    if (number !== diffnum) return number;
  } return number;
}

export const range = (start, end) => {
  const numbers = [];
  let number;
  for (number=start; number<=end; number++) {
    numbers.push(number);
  }

  return numbers;
}

/**
 * 
 * 
 * @description get uncommon items between two arrays
 * 
 * @param {*} array1 
 * @param {*} array2
 * 
 * @returns { Array }
 * 
 * @name arraydiff
 */
export const arraySubsets = (array) => {
  let pos, index, current, nextpos, newarray;
  const subsets = [];

  for (pos = 0; pos < array.length - 1; pos++) {
    current = [ array[pos] ];
    for (nextpos = pos + 1; nextpos < array.length; nextpos++) {
      for (index=nextpos; index < array.length; index++) {
        newarray = ([ ...current, array[index]]);
        subsets.push(newarray);
      } current.push(array[nextpos]);
    }
  } return subsets;
}

/**
 * 
 * 
 * @description check combination and stars count
 * 
 * @param { Array } answers 
 * @param { Integer } stars
 * 
 * @name verify 
 */
export const verify = (answers, stars) => {
  const sum = answers.reduce((number, next) => number + next, 0);
  return sum === stars;
}

/**
 * 
 * 
 * @description all modal types
 * 
 * @name modalTypes
 */
export const modalTypes = [
  'info'
];

/**
 * 
 * 
 * @description string messages
 * 
 * @name messages
 */
export const messages = [
  'Maximum of 5 answers is allowed for selection',
  'You have no more refresh available'
];

/**
 * 
 * 
 * @description App component intiial state
 * 
 * @name initialAppState
 */
export const initialAppState = {
  stars: 0,
  refresh: 5,
  thumb: null,
  showNext: false,
  gameStatus: 0,

  answers: {
    used: [],
    selected: []
  },

  modal: {
    type: null,
    props: {}
  }
};
