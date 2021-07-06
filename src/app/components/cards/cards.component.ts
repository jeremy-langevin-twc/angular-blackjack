import { Component, OnInit } from '@angular/core';
import { Card } from '../../card';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  cards: Card[] = [];

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
  }

  getStartingCards(): void {
    this.cardService.getStartingCards()
      .subscribe(cards => this.cards = cards);
  }
}
