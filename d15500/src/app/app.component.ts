import { Component } from '@angular/core';
import { Card } from './card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{
    provide: Card,
    useFactory: () => {
      const suite: number = Math.floor(Math.random() * 4);
      const suiteName: string = suite == 0 ? "Clubs" : suite == 1 ? "Diamonds" : suite == 2 ? "Hearts" : "Spades";
      const rank: number = Math.floor(Math.random() * 15);
      const rankName: string = rank == 0 ? "Ace" : rank == 1 ? "Joker" : rank == 2 ? "King" : rank == 3 ? "Queen" : (rank - 3).toString();
      
      return new Card(suiteName, rankName);
    }
  }]
})
export class AppComponent {
  constructor(card: Card) {
    this.title = card.toString();
  }
  title = 'app';
}
