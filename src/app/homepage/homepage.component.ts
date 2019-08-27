import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task.model';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { AuthService } from '../services/auth.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  animations: [
    trigger('contactsAnimation', [
      state('active', style({
        opacity: '1'
      })),
      transition('void => *', [
        style({transform: 'translateY(-100px)', opacity: '0'}),
        animate('1000ms ease-in-out')
      ])
    ])
  ]
})
export class HomepageComponent implements OnInit {

  search='';
  

  folderObjs=[{
    name:'flo mdr',
    size:'24 ans'
  },{
    name:'wahiba <3',
    size:'36 ans'
  },{
    name:'alex^^',
    size:'33 ans'
  },{
    name:'natacha <3',
    size:'25 ans'
  }]


  todos = [];

  // addTodo(newTodotitre, newTodoDescription){
  //   var newTodo = {
  //     titre: newTodotitre,
  //     description: newTodoDescription,
  //     done: false,
  //     delete: false
  //   };
  //   this.todos.push(newTodo);
  // }


  constructor(private authService: AuthService) { }

  ngOnInit() {
  }


  deleteTodo(todos){
    this.todos = this.todos.filter(t => t.title !== todos.title);
  }

  onSubmit(value: any){
    this.todos.unshift(
      new Task(
        value.id,
        value.user_id,
        value.title,
        value.description,
        value.status,
      )
    );
  }

}
