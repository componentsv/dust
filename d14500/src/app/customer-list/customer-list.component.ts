import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  private customerList = [
    {name:'Bryan', city:'Atlanta'},
    {name:'Peter', city:'San Francisco'},
    {name:'Janet', city:'Colorado'}
  ];

  constructor() { }

  ngOnInit() {
  }

  onCustomerClicked(customerName:String) {
    alert('Customer Clicked: ' + customerName);
  }

}
