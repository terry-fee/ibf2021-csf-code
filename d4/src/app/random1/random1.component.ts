import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-random1',
  templateUrl: './random1.component.html',
  styleUrls: ['./random1.component.css']
})
export class Random1Component implements OnInit {

  myForm: FormGroup = <FormGroup>{};
  num: number = Math.ceil(Math.random()*100);
  message = "";

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      num: this.fb.control("")
    })
  }

  processForm() {
    const n = this.myForm.value.num;
    if (n > this.num)
      this.message = "Too high!";
    else if (n < this.num)
      this.message = "Too low!";
    else
      this.message = "Correct!";
  }

}
