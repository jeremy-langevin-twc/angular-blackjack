import { Injectable } from '@angular/core';
import { Card } from '../card';
import { CARDS, DEALERCARDS } from '../mock-cards';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  // Keep track of the cards drawn from the deck.
  drawn: number = 0;

  constructor() { }

  getDealerCards(): Observable<Card[]> {
    const cards = of(DEALERCARDS);
    return cards;
  }

  getStartingCards(): Observable<Card[]> {
    const cards = of(CARDS);
    this.drawn += CARDS.length;
    return cards;
  }
}
