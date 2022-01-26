import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.css']
})
export class RsvpComponent implements OnInit {
  rsvpForm: FormGroup = <FormGroup>{};
  labels = [ "Fish", "Meat", "Vegetables" ];
  dietArray: FormArray = <FormArray>{};

  constructor(private fb: FormBuilder) { }

  teams: any[] = [
    { name: 'Liverpool' },
    { name: 'Manchester City' },
    { name: 'Manchester United' },
    { name: 'Arsenal' },
    { name: 'Leicester City' },
    { name: 'Chelsea' },
    { name: 'Tottenham Hotspur' },
];

  ngOnInit(): void {
    this.dietArray = this.fb.array(
      this.labels.map(() => this.fb.control("")
    ));

    this.rsvpForm = this.fb.group({
      diet: this.dietArray
    })

  }

  processForm() {

  }

  greet(fn: FormControl) {
    alert("Hello " + fn.value);
  }

}
