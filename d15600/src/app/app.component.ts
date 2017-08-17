import { Component, Injector } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{
    provide: 'language',
    useValue: 'en'
  }]
})
export class AppComponent {
  title: string = '';
  
  constructor(private injector: Injector) {
    console.log(injector);
    this.title = 'Language is: ';
  }
}
