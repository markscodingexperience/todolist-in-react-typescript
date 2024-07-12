import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { type } from 'os';
import InputField from './components/InputField';
import { Todo } from './model';
import TodoList from './components/TodoList';

// let name: string; //initializing in typescript, put a colon and the type 
// let age: number | string; //if you want a variable to take in two types, number and string, put a symbol like (|)
// let isEmployee: boolean;
// let job: string[];
// let role: [number, string];
// let printName: (name: string) => void; //this function has a return type of void, can be replaced by number, string, etc. let printName: (name: string) => never
// let height: unknown;

// interface Person {
//   name: string,
//   age: number,
// }

// type anotherPerson = Person & { //this is how extending interface with a type, it will need to provide the interface properties too or else there will be an error
//   height: number,
//   weight: number
// }

// type anotherPerson = Person & { 
//   height: number,
//   weight: number
// }

// interface Person extends Person { //this is how you will extend a type to an interface, using the word extends
//   name: string,
//   age: number,
// }

// function PrintName(name:string) { //here's how you make a function 
//   console.log(name);
// }

// PrintName("Mark");

// //type object
// type Employee = {
//   jobDescription: string,
//   department?: string, //putting question mark(?) after the property makes it optional
//   yearsOfService?: number
// }

// let employee: Employee = {
//   jobDescription: "asdasd",

// }

// let lotsOfEmployee: Employee[];

let App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [list, setList] = useState<Todo[]>([]);
  
  const handleTodo = (e: React.FormEvent) => {
    e.preventDefault();


    if (todo) {
      setList([...list, {id: Date.now(), todo, isDone: false}]);
      setTodo("");
    }
    console.log(list)
  }
  
  return (
    <div className="App">
      <span className='heading'>Todo List</span>
      <InputField todo={todo} setTodo={setTodo} handleTodo={handleTodo}/>
      <TodoList list={list} setList={setList}/>
    </div>
  );
}

export default App;
