import { Component } from '@angular/core';

@Component({
  selector   : 'app-root',
  templateUrl: './app.component.html',
  styleUrls  : ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  getReversed(str: string) {
    let reversed = '';

    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str.substring(i, i + 1);
    }

    return reversed;
  }
}
