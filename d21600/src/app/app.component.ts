import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, FormControlName, Validators } from '@angular/forms';

export function validateNotMercedes(control: AbstractControl) {
  return (control.value.toLowerCase() != 'mercedes') ?
    null :
    {
      validateNotMercedes: {
        valid: false
      }
    }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  formGroup: FormGroup;

  ngOnInit() {
    this.formGroup = new FormGroup({
      make: new FormControl('', [Validators.required, validateNotMercedes]), model: new FormControl('', Validators.required)
    });
  } 
  
  onSubmit(form: FormGroup) {
    alert('submit');
  }
}
