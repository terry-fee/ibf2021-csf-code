import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'd4';
  parentCount: number = 9;
  parentCountTwo: number = 7;
  output: number = 0;

  parentAct($e: any) {
    this.parentCount = <number> $e;
    //this.parentCount = this.output
  }

  parentActTwo($e: any) {
    this.parentCount = <number> $e;
    //this.parentCount = this.output;
  }
}
