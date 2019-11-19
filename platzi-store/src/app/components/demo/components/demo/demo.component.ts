import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  title = 'platzi-store';
  power = 10;
  names = [];
  name: string;

  constructor() {}

  ngOnInit() {}

  addName(name: string) {
    this.names.push(name);
  }

  deleteName(index: number) {
    this.names.splice(index, 1);
  }
}
