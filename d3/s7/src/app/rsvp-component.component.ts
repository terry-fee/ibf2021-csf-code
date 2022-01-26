import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-rsvp-component',
  templateUrl: './rsvp-component.component.html',
  styleUrls: ['./rsvp-component.component.css']
})
export class RsvpComponentComponent implements OnInit {
  rsvpForm: FormGroup = <FormGroup>{};
  isShow = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.rsvpForm = this.fb.group({
      name: this.fb.control("", [Validators.required]),
      email: this.fb.control("", [Validators.required, Validators.email]),
      phone: this.fb.control(""),
      attending: this.fb.control("", [Validators.required]),
    });
  }

  /* ngOnInit(): void {
    this.rsvpForm = this.fb.group({
      name: this.fb.control(""),
      email: this.fb.control(""),
      phone: this.fb.control(""),
      attending: this.fb.control("")
    });
  } */

  processForm() {
    const rsvp = this.rsvpForm.value.time;
    //this.isShow = true;
  }

  myName: string = "";

  processForm2(form: NgForm) {
    const name = form.value.email;
    form.reset();
    this.myName = name;
  }

}
