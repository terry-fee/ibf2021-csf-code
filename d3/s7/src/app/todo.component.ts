import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoForm: FormGroup = <FormGroup>{};
	todoArray: FormArray = <FormArray>{};

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.todoArray = this.fb.array([]);
		this.todoForm = this.fb.group({ todos: this.todoArray });
  }

  addTodo() {
		const todoGroup = this.fb.group({
			date: this.fb.control(new Date()),
			description: this.fb.control("", [Validators.required]),
			priority: this.fb.control("")
		})

		this.todoArray.push(todoGroup);
	}

  processForm() { }

}
