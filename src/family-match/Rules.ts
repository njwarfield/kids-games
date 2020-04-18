export default class Rules {
  pairs: number = 6;

  createCardList(cardCount: number): Array<CardDetail> {
    let items: Array<number> = this.getRandomImagesIds(cardCount)
    items = items.concat(items)
    let cards = this.shuffleDeck(items);
    return cards.map((card, index) => new CardDetail(index+1, card, false))
  }

  getRandomImagesIds(cardCount: number): Array<number> {
      var items: Array<number> = []

      while(items.length < this.pairs) {
        var item = Math.floor(Math.random()*(cardCount - 1) + 1)
        if(!items.includes(item)) {
            items.push(item)
        }
      }
      return items
  }

  shuffleDeck<T>(items: Array<T>): Array<T> {
    var length = items.length,
      deck,
      index;
    while (length) {
      index = Math.floor(Math.random() * length--);
      deck = items[length];
      items[length] = items[index];
      items[index] = deck;
    }
    return items;
  }
}


export class CardDetail {
    id: number;
    value: number;
    isShowing: boolean;

    constructor(id: number, value: number, isShowing: boolean) {
        this.id = id;
        this.value = value;
        this.isShowing = false;
    }
}

export class PlayingCards {
  cards: Array<CardDetail>;

  constructor(cards: Array<CardDetail>) {
    this.cards = cards;
  }
}