import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ITodo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private mock: ITodo[] = [
    {
      title:'Nilgai',
      description:'Boselaphus tragocamelus',
      isCompleted:true,
      isArchived:true,
      endDate:'3/7/2021',
    },
    {
      title:'Spectacled caiman',
      description:'Caiman crocodilus',
      isCompleted:true,
      isArchived:false,
      endDate:'1/2/2007',
    },
    {
      title:'Turkey vulture',
      description:'Cathartes aura',
      isCompleted:false,
      isArchived:false,
      endDate:'27/10/2016',
    },
  ];
   

private _todoSubject: BehaviorSubject<Array<ITodo>> =  new BehaviorSubject(this.mock)


  constructor() { }



 public getTodos(): Observable<Array<ITodo>> {
   return this._todoSubject.asObservable()

 }

}
