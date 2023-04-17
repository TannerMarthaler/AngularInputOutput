import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pText: string = '';
  childMessage: string = '';

  recieveMessage(msg: string) {
    this.childMessage = msg;
  }

  onKey(str: string): void {
    this.pText = str;
  }
}
