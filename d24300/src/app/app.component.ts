import { Component } from '@angular/core';
import { Service } from './service';
import { FormsModule } from '@angular/forms';
import 'rxjs/Rx'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  _search = 'Atlanta';
  _searched = false;
  _result = '';

  constructor(private _service: Service) { }

  doSearch() {
    this._service.search(this._search).subscribe(
      res => {
        const obj = res.json();
        
        if ((obj) && (obj.places) && (obj.places.length) && (obj.places.length > 0)) {
          this._result = obj.places[0];
        } else {
          this._result = undefined;
        }
      }
      ,
      err => {
        console.log(err);
      },
      () => {
        this._searched = true;
      });
  }
}
