import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  //template: "<h2>This is the Cart template</h2>",
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit,
OnDestroy {

  name = "";
  isDisabled: boolean = false;
  /* fontSize = "30px";
  greetings = "Hello all!" */

  constructor() { }

  ngOnInit(): void {
    //alert("Init");
  }

  ngOnDestroy(): void {
    //alert("Destroy");
  }

  clicked($e: any) {
    alert("Clicked on " + $e.target.innerHTML);
  }

  ///////
  cart: string[] = [];

  up() {
    this.cart.push("Apple");
  }

  down() {
    if (this.cart.length > 0)
      this.cart.shift();
  }

}
