import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'platzi-store';
  names = [];
  name: string;

  addName(name: string) {
    this.names.push(name);
  }

  deleteName(index: number) {
    this.names.splice(index, 1);
  }
}
