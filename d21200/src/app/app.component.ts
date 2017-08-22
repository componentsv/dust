import { Component, ViewChild } from '@angular/core';
import { NgForm, RequiredValidator } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('appointmentForm') _appointmentForm: NgForm; 
  
  _name: string = 'mark';
  _password: string = '';
  _time: string = '';
  _ailment: string = '';

  onSubmitForm() {
    alert("Submitting data:" + JSON.stringify(this._appointmentForm.value));
  }
}
