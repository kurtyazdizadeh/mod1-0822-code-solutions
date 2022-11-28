console.log('Lodash is loaded:', typeof _ !== 'undefined');

class Player {
  constructor(name) {
    this.name = name;
    this.hand = [];
  }
}

function createDeck() {
  var suits = ['diamonds', 'clubs', 'hearts', 'spades'];
  var values = ['Ace', 'King', 'Queen', 'Jack', 10, 9, 8, 7, 6, 5, 4, 3, 2];
  var deck = [];

  for (var i = 0; i < suits.length; i++) {
    for (var j = 0; j < values.length; j++) {
      deck.push({ suit: suits[i], value: values[j] });
    }
  }

  return deck;
}

var players = [new Player('player1'), new Player('player2'), new Player('player3'), new Player('player4')];

function startGame(players, cardsPerHand) {
  // creates a shuffled deck
  var deck = _.shuffle(createDeck());
  var currentHighScore = 0;
  var currentWinner = null;

  // gives each player # of cards from the shuffled deck
  for (let i = 0; i < players.length; i++) {
    players[i].hand = deck.splice(0, cardsPerHand);
  }
  console.log(players);

  // calculates score per player
  for (let i = 0; i < players.length; i++) {
    var playerScore = 0;
    // calculates value of each card in player's hand and adds to their playerScore
    for (var j = 0; j < players[i].hand.length; j++) {
      if (players[i].hand[j] === 'Ace') {
        playerScore += 11;
      }
      if (
        players[i].hand[j].value === 'King' ||
        players[i].hand[j].value === 'Queen' ||
        players[i].hand[j].value === 'Jack'
      ) {
        playerScore += 10;
      } else {
        playerScore += players[i].hand[j].value;
      }
    }
    // if current player ties the highest score, set them as another winner
    if (playerScore === currentHighScore) {
      currentWinner += `,${players[i].name}`;
    }
    // if current player beat the previous high score, set the new high score
    // from the current player, set the current player as the winner
    if (playerScore > currentHighScore) {
      currentHighScore = playerScore;
      currentWinner = players[i].name;
    }
  }
  // check for a tie condition
  if (currentWinner.includes(',')) {
    // create an array of tied winners from string
    var tiedPlayers = currentWinner.split(',');
    console.log(`There was a tie between: ${_.join(tiedPlayers, ' ')}`);

    // recursively start another game with only tied players
    startGame(tiedPlayers.map(player => new Player(player)), cardsPerHand);
  } else {
    console.log('Winner: ', currentWinner);
  }
}

startGame(players, 2);
