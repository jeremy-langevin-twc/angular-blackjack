import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() tableColor: string;

  gameStarted: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleStartGame() {
    this.gameStarted = !this.gameStarted;
  }

}
