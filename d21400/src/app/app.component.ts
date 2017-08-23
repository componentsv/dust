import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormControlName, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  formGroup: FormGroup;
  
  ngOnInit() {
    this.formGroup = new FormGroup({
      name: new FormControl('', Validators.required), location: new FormControl('', Validators.required)
    });
  } 
  
  onSubmit(form: FormGroup) {
    alert('sumit');
  }
}
