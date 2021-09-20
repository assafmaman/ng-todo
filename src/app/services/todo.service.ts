import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ITodo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private mock: ITodo[] = [
    {
      id:1,
      title:'Nilgai',
      description:'Boselaphus tragocamelus',
      isCompleted:false,
      isArchived:true,
      endDate:'3/7/2021',
      selected: true,
    },
    {
      id:2,
      title:'Spectacled caiman',
      description:'Caiman crocodilus',
      isCompleted:false,
      isArchived:false,
      endDate:'1/2/2007',
      selected: false,
    },
    {
      id:3,
      title:'Turkey vulture',
      description:'Cathartes aura',
      isCompleted:false,
      isArchived:false,
      endDate:'27/10/2016',
      selected: false,
    },
    {
      id:4,
      title:'Csrella tela',
      description:'Romete ten',
      isCompleted:false,
      isArchived:false,
      endDate:'27/10/2016',
      selected: false,
    },
  ];
   
private _todoSubject: BehaviorSubject<Array<ITodo>> =  new BehaviorSubject(this.mock);

private _singleTodoSubject: BehaviorSubject<ITodo> = new BehaviorSubject(this.mock[0]);

//private s2sss: BehaviorSubject<ITodo> = new BehaviorSubject(this.mock);

  constructor() { }

 public getTodos(): Observable<Array<ITodo>> {
   return this._todoSubject.asObservable()
 }

 public getSelectedTodo(): Observable<ITodo> {
   return this._singleTodoSubject.asObservable()
 }

 public setSelectedTodo(todo:ITodo){
   this._singleTodoSubject.next(todo)
 }

}
