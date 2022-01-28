import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.css']
})
export class ChildTwoComponent implements OnInit {

  @Input()
  childTwoOutput: number = 0;
  @Output()
  onChildTwoEvent: EventEmitter<number> =
    new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  decrement() {
    this.childTwoOutput--;
    this.onChildTwoEvent.emit(this.childTwoOutput);
  }

  isLtEqZero() {
    return this.childTwoOutput <= 0;
  }

}
