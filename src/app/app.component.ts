import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `<h1>Hello World from inline template!</h1>
  // <p>Angular is awesome</p>
  // <p>Thank you <strong>Gio</strong></p>
  // `,
  styleUrls: ['./app.component.scss'],
  // styles: [
  //   'h1{color: green}'
  // ]
})
export class AppComponent {
  title = 'hotelInventoryApp';

  role = 'Admin';
}
