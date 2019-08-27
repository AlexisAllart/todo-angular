import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task.model';
import { trigger, state, style, transition, animate } from '@angular/animations';

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


  // todos = [
  //   {
  //     titre: 'Appeler Mamie',
  //     description:'mamie a laissé un message sur le repondeur je dois la rappeler',
  //     done: true,
  //     delete: false
  //   },
  //   {
  //     titre: 'Changer mot de passe ',
  //     description:'changer mot de passe pour sécuriser mails',
  //     done: false,
  //     delete: false
  //   },
  //   {
  //     titre: 'Nettoyer la maison',
  //     description:'bien insister dans la cuisine',
  //     done: false,
  //     delete: false
  //   },
  //   {
  //     titre: 'Acheter croquettes',
  //     description:'Passer a match sinon Gus va avoir faim',
  //     done: false,
  //     delete: false
  //   },

  // ];

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


  constructor() { }

  ngOnInit() {
  }


  deleteTodo(todos){
    this.todos = this.todos.filter(t => t.titre !== todos.titre);
  }

  onSubmit(value: any){
    this.todos.unshift(
      new Task(
        value.titre,
        value.description,
      )
    );
  }

}
