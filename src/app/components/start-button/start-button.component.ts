import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-start-button',
  templateUrl: './start-button.component.html',
  styleUrls: ['./start-button.component.css']
})
export class StartButtonComponent implements OnInit {
  @Output() btnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  emitStartGame() {
    this.btnClick.emit();
  }

}
