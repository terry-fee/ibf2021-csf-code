import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Hello, All!";
  //fontSize = "1em";
  // greetings = "Hello World!"
  myProp = true;

  /* fontSizeChanged($event: any) {
    this.fontSize = `${$event.target.value}em`;
  } */

  sizeChanged(size: any) {
    alert(`font size: ${size} `);
  }

  /////
  isDisabled = false;

  /* ngOnInit() {
    alert("Init");
  }

  ngOnDestroy() {
    alert("Destroy")
  } */

  show = true;

  availableItems: string[] =
  ["Apple","Orange","Pear"];

  bagOfItems: string[] = [];

}
