import { Component } from '@angular/core';

@Component({
  selector   : 'app-root',
  templateUrl: './app.component.html',
  styleUrls  : ['./app.component.css']
})
export class AppComponent {
  names = [
    'Peter Dinklage', 'Mary-Ann J Blige', 'Eminem'
  ];
}
