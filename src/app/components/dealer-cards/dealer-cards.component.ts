import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../../card';

@Component({
  selector: 'app-dealer-cards',
  templateUrl: './dealer-cards.component.html',
  styleUrls: ['./dealer-cards.component.css']
})
export class DealerCardsComponent implements OnInit {
  @Input() dealerCards: Card[];

  constructor() { }

  ngOnInit(): void {
  }

}
