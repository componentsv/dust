import { Component, Input, AfterContentInit, ContentChildren, QueryList } from '@angular/core';

@Component({
  selector: 'member',
  template: `
  <p [style.backgroundColor]="getBackgroundColor()">
    <ng-content></ng-content>
  </p>
  `,
  styles: ["p{padding: 5px}"]
})
export class MemberComponent {
  selected = false;

  getBackgroundColor() {
    return this.selected ? "#FFCCCC" : "#CCFFFF";
  }
}

@Component({
  selector: 'crew',
  template: `
  <p>
    <ng-content></ng-content>
  </p> 
  `,
  styles: []
})
export class CrewComponent implements AfterContentInit {
  @ContentChildren(MemberComponent) members: QueryList<MemberComponent>;
  
  ngAfterContentInit() {
    this.members.first.selected = true;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
