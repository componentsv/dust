import { Component } from '@angular/core';

class Watch {
  getTime(): string {
    return new Date() + "";
  }
}

class Seiko extends Watch {
  getTime(): string {
    return "Seiko Time:" + super.getTime();
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{
    provide: Watch,
    useClass: Seiko
  }]
})
export class AppComponent {
  constructor(private watch: Watch) { }
}
