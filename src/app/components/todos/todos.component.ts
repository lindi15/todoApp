import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];

  inputTodo: string = "";

  constructor() { }

  ngOnInit(): void {
    this.todos = []
  }

  toggleDone(id: number) {
    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;

      return v;
    })
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }

  addTodo() {
    if (this.inputTodo == "") {
      return null;
    } else {
      this.todos.push({
        content: this.inputTodo,
        completed: false
      });
    }
  }


  updateTodo(id: number) {
    let i = id;
    if (i != null) {

      console.log("value updated")
    } else {
      console.log("value not updated")
    }

  }
  

  // this.inputTodo = "";



}
