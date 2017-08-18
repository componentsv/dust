import { Component } from '@angular/core';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'pepperoni',
  template: `
    <div>
    <h2>Pepperoni</h2>
    <img src="https://thumb1.shutterstock.com/display_pic_with_logo/55755/161642033/stock-photo-single-slice-of-pepperoni-meat-isolatedon-white-with-path-shot-from-above-161642033.jpg"> </div>
  `,
  styles: []
})
export class PepperoniComponent { }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
