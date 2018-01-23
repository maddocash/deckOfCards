// generate deck
const deckContainer = document.getElementById('deckContainer');
let deck = [];

const generateDeck = () => {
  deck = [];
  const suits = ['clubs', 'spades', 'hearts', 'diamonds'];
  const ranks = ['A', 'K', 'Q', 'J', 10, 9, 8, 7, 6, 5, 4, 3, 2];
  let docFrag = document.createDocumentFragment();

  for (var s = 0; s < suits.length; s++) {
    for (var n = 0; n < ranks.length; n++) {
      deck.push(`${ranks[n]} ${suits[s]}`);
    }
  }
  return displaydeck();
};

const shuffleDeck = () => {
  deck = shuffle(deck);
  displaydeck();
};

const displaydeck = () => {
  deckContainer.innerHTML = '';
  for (var i = 0; i < deck.length; i++) {
    var card = document.createElement('div');
    card.appendChild(document.createTextNode(deck[i]));
    card.setAttribute('id', `card ${i}`);
    card.setAttribute('class', `card`);
    deckContainer.appendChild(card);
  }
  return;
};

const shuffle = array => {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};
