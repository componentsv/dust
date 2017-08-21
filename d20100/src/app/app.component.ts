import { Component, OnInit } from '@angular/core';
import { SwaggerService } from './swagger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SwaggerService]
})
export class AppComponent implements OnInit {
  _languages = new Array<any>();

  constructor(private _swaggerService: SwaggerService) { }

  ngOnInit() {
    this._swaggerService.getLanguages().subscribe(
      res => { this._languages = res.json(); },
      error => { console.log('an error occurred'); }
    )
  }
}
