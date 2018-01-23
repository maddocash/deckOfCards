const deckContainer = document.getElementById('deckContainer');
let deck = [];
let myCards = [];

const generateDeck = selection => {
  deck = [];
  const suits = ['clubs', 'spades', 'hearts', 'diamonds'];
  const ranks = ['A', 'K', 'Q', 'J', 10, 9, 8, 7, 6, 5, 4, 3, 2];
  let docFrag = document.createDocumentFragment();

  for (let s = 0; s < suits.length; s++) {
    for (let n = 0; n < ranks.length; n++) {
      deck.push({name: `${ranks[n]} ${suits[s]}`});
    }
  }
  deck.map((itm, idx) => (itm.value = idx));
  return displaydeck(selection);
};

const shuffleDeck = selection => {
  deck = shuffle(deck);
  displaydeck(selection);
};

const displaydeck = selection => {
  deckContainer.innerHTML = '';
  let array = selection === 'all' ? deck : myCards;

  for (let c = 0; c < array.length; c++) {
    let drawnCard = document.createElement('div');
    drawnCard.innerHTML = 'pick me';
    drawnCard.setAttribute('onclick', `chosenCards(${c})`);
    drawnCard.setAttribute('class', 'btns');

    let card = document.createElement('div');
    card.appendChild(document.createTextNode(array[c].name));
    card.appendChild(drawnCard);
    card.setAttribute('id', `card ${c}`);
    card.setAttribute('class', `card`);

    deckContainer.appendChild(card);
  }
  return;
};

const reset = () => {
  myCards = [];
};

const chosenCards = card => {
  document.getElementById(`card ${card}`).setAttribute('class', ' card style1');
  return (myCards = [...myCards, deck[card]]);
};

const sort = () => {
  myCards.sort((a, b) => {
    if (a.value < b.value) return -1;
    if (a.value > b.value) return 1;
    return 0;
  });
  displaydeck('some');
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
