import { Component, Input, OnInit } from '@angular/core';
import { ICar } from './icar';

@Component({
  selector   : 'car',
  templateUrl: './car.component.html',
  styleUrls  : ['./car.component.css']
})
export class CarComponent implements OnInit {

  @Input('theCar') car: ICar;

  constructor() {
  }

  ngOnInit() {
  }

}
