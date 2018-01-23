// generate deck
const deck = [];

const generateDeck = () => {
  const suits = ['clubs', 'spades', 'hearts', 'diamonds'];
  const ranks = ['A', 'K', 'Q', 'J', 10, 9, 8, 7, 6, 5, 4, 3, 2];
  let docFrag = document.createDocumentFragment();
  const deckContainer = document.getElementById('deckContainer');

  for (var s = 0; s < suits.length; s++) {
    for (var n = 0; n < ranks.length; n++) {
      deck.push(`${ranks[n]} ${suits[s]}`);
    }
  }
  displaydeck();
};

const displaydeck = () => {
  for (var i = 0; i < deck.length; i++) {
    var card = document.createElement('div');
    card.appendChild(document.createTextNode(deck[i]));
    card.setAttribute('id', `card ${i}`);
    card.setAttribute('class', `card`);
    deckContainer.appendChild(card);
  }
  return;
};
