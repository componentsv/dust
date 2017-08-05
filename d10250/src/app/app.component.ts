import { Component } from '@angular/core';
import {Car} from './car';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  _cars = [
    new Car('car1', 2002, 'bmw', 'm3', 'https://en.wikipedia.org/wiki/BMW_M3'), 
    new Car('car2', 2017, 'acura', 'nsx', 'https://en.wikipedia.org/wiki/Honda_NSX'), 
    new Car('car3', 2016, 'chevy', 'camaro', 'https://en.wikipedia.org/wiki/Chevrolet_Camaro')
  ];

  showCar(event) {
    const desc = event.target.parentElement.dataset.desc;

    if (window.confirm('if you click "ok" you would be redirected to an article about the' + desc + '. Cancel will load this website')) {
      window.location.href=event.target.parentElement.dataset.article;
    }
  }
}
