import * as React from "react";
import Rules, { CardDetail } from "./Rules";
import Card from "./Card";
import GameState, {IBoardRules} from "../GameState";

import "./family-match.css";
import End from "./End";

interface IBoardProps {}

type BoardState = {
  maxCards: number;
  matches: Array<number>;
  cards: Array<CardDetail>;
};

class Board extends React.Component<IBoardProps, BoardState>
  implements IBoardRules {
  constructor(props: IBoardProps) {
    super(props);
    this.state = {
      maxCards: 12,
      matches: [],
      cards: this.getCards(12)
    };
    this.handleFlip = this.handleFlip.bind(this);
  }

  getCards(cardCount: number): Array<CardDetail> {
    let rules = new Rules();
    const cards = rules.createCardList(cardCount);
    return cards;
  }

  handleFlip = (cardIndex: number) => {
    let { cards } = this.state;
    let card = cards[cardIndex];
    card.isShowing = !card.isShowing;
    cards[cardIndex] = card;
    let updatedCards = cards;
    this.setState({ cards: updatedCards });
  };

  compareFlips = () => {
    let { cards, matches } = this.state;
    let flipped = cards.filter(
      c => c.isShowing === true && !matches.includes(c.id)
    );
    if (flipped?.length === 2) {
      this.pairFlippedCheck(flipped, matches, cards);
    }
    if (flipped?.length > 2) {
      console.log(`${flipped?.length}`);
      for (let index = 0; index < flipped?.length; index++) {
        let cardIndex = cards.findIndex(c => flipped[index].id === c.id);
        cards[cardIndex].isShowing = false;
      }
      this.setState({ cards: cards });
    }
  };

  private pairFlippedCheck(
    flipped: CardDetail[],
    matches: number[],
    cards: CardDetail[]
  ) {
    if (flipped[0].value === flipped[1].value) {
      matches.push(...flipped.map(f => f.id));
      let newMatches = matches;
      this.setState({ matches: newMatches });
    } else {
      let firstIndex: number = cards.findIndex(c => flipped[0].id === c.id);
      cards[firstIndex].isShowing = false;
      let secondIndex: number = cards.findIndex(c => flipped[1].id === c.id);
      cards[secondIndex].isShowing = false;
      this.setState({ cards: cards });
    }
  }

  gameState(): GameState {
    let { matches, maxCards } = this.state;
    if (matches.length === maxCards) {
      return GameState.Win
    }
    return GameState.InProgress
  }

  render() {
    let { cards } = this.state;
    if(this.gameState() === GameState.Win) {
      return (
        <End/>
      )
    }
    
    return (
      <div className="board">
        {cards.map(card => {
          return (
            <Card
              key={card.id}
              card={card}
              onFlip={this.handleFlip}
              flipHappened={this.compareFlips}
            ></Card>
          );
        })}
      </div>
    );
  }
}
export default Board;
