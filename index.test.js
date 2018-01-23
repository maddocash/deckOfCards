const cardFunc = require('./index');
let myCards = [
  {name: '3 clubs', value: 11},
  {name: '2 clubs', value: 12},
  {name: '10 clubs', value: 4},
  {name: 'J clubs', value: 3},
  {name: '9 spades', value: 18},
  {name: 'A clubs', value: 0}
];

it('sort function working', () => {
  expect(cardFunc.sort(myCards)).toEqual([
    {name: 'A clubs', value: 0},
    {name: 'J clubs', value: 3},
    {name: '10 clubs', value: 4},
    {name: '3 clubs', value: 11},
    {name: '2 clubs', value: 12},
    {name: '9 spades', value: 18}
  ]);
});

it('deletes the hand array', () => {
  expect(cardFunc.reset()).toEqual([]);
});

it('generate Deck', () => {
  expect(cardFunc.generateDeck()).toEqual([
    {name: 'A clubs', value: 0},
    {name: 'K clubs', value: 1},
    {name: 'Q clubs', value: 2},
    {name: 'J clubs', value: 3},
    {name: '10 clubs', value: 4},
    {name: '9 clubs', value: 5},
    {name: '8 clubs', value: 6},
    {name: '7 clubs', value: 7},
    {name: '6 clubs', value: 8},
    {name: '5 clubs', value: 9},
    {name: '4 clubs', value: 10},
    {
      name: '3 clubs',
      value: 11
    },
    {name: '2 clubs', value: 12},
    {name: 'A spades', value: 13},
    {name: 'K spades', value: 14},
    {name: 'Q spades', value: 15},
    {name: 'J spades', value: 16},
    {name: '10 spades', value: 17},
    {
      name: '9 spades',
      value: 18
    },
    {name: '8 spades', value: 19},
    {name: '7 spades', value: 20},
    {name: '6 spades', value: 21},
    {name: '5 spades', value: 22},
    {name: '4 spades', value: 23},
    {name: '3 spades', value: 24},
    {
      name: '2 spades',
      value: 25
    },
    {name: 'A hearts', value: 26},
    {name: 'K hearts', value: 27},
    {name: 'Q hearts', value: 28},
    {name: 'J hearts', value: 29},
    {name: '10 hearts', value: 30},
    {name: '9 hearts', value: 31},
    {name: '8 hearts', value: 32},
    {
      name: '7 hearts',
      value: 33
    },
    {name: '6 hearts', value: 34},
    {name: '5 hearts', value: 35},
    {name: '4 hearts', value: 36},
    {name: '3 hearts', value: 37},
    {name: '2 hearts', value: 38},
    {name: 'A diamonds', value: 39},
    {
      name: 'K diamonds',
      value: 40
    },
    {name: 'Q diamonds', value: 41},
    {name: 'J diamonds', value: 42},
    {
      name: '10 diamonds',
      value: 43
    },
    {name: '9 diamonds', value: 44},
    {name: '8 diamonds', value: 45},
    {name: '7 diamonds', value: 46},
    {name: '6 diamonds', value: 47},
    {name: '5 diamonds', value: 48},
    {name: '4 diamonds', value: 49},
    {name: '3 diamonds', value: 50},
    {name: '2 diamonds', value: 51}
  ]);
});
