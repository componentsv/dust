import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  @Input() customer;
  @Output() clicked: EventEmitter<String> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onClicked() {
    this.clicked.emit(this.customer.name);
  }

}
