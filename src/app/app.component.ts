import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `<h1>Hello World from inline template!</h1>
  <p>Angular is awesome</p>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hotelInventoryApp';
}
