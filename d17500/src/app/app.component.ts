import { Component, ViewChild } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'non-authenticated-component',
  template: `
  <div>
    <h2>Non-authenticated</h2>
    <p>This component can be accessed without authentication.</p>
  </div>
  `,
  styles: []
})
export class NonAuthenticatedComponent { }

@Component({
  selector: 'authenticated-component',
  template: `
    <div>
      <h2>Authenticated</h2>
      <p>This component cannot be accessed without authentication.</p>
     </div>
  `,
  styles: []
})
export class AuthenticatedComponent { }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loggedIn: boolean = false;
  
  @ViewChild('name') name;
  @ViewChild('password') password;
  
  constructor(private _userService: UserService) { }
  
  login() {
    this._userService.authenticate(
      this.name.nativeElement.value,
      this.password.nativeElement.value);
  }
}
