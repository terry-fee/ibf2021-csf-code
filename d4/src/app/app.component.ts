import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'd4';
  parentCount: number = 9;
  output: number = 0;

  parentAct($e: any) {
    this.output = <number> $e * 2;
  }
}
