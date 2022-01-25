import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-font-size',
  templateUrl: './font-size.component.html',
  styleUrls: ['./font-size.component.css']
})
export class FontSizeComponent implements OnInit {
  fontSize = "1em";
  @Input() message = "";
  @Output() onFontSize = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  fontSizeChanged($event: any) {
    this.fontSize = `${$event.target.value}em`;
    //this.onFontSize.emit(parseInt($event.target.value));
  }

}
