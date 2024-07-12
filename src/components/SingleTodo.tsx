import React, { useState } from 'react';
import { Todo } from '../model';
import {AiFillEdit, AiFillDelete } from 'react-icons/ai';
import {MdDone } from 'react-icons/md';
import "./styles.css";
import TodoList from './TodoList';


interface Props {
    todo: Todo,
    list: Todo[],
    setList: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({todo, list, setList}: Props) => {

    const [edit, setEdit] = useState<boolean>(false);
    const [editTask, setEditTask] = useState<string>(todo.todo);


    

    const taskComplete = (id: number) => {
        setList(list.map((todo) => todo.id === id ? {...todo, isDone: !todo.isDone}: todo));
    }

    const taskDelete = (id: number) => {
        setList(list.filter((todo) => todo.id !== id));
    }

    const taskEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();

        setList(list.map((todo) => (
            todo.id === id ? {...todo, todo:editTask} : todo
        )))
        setEdit(false);
    }

  return (
    <form action="" className='card' onSubmit={(e)=>taskEdit(e, todo.id)}> 
    {
        edit ? (
            <input value={editTask} onChange={(e)=>setEditTask(e.target.value)} className='todoCards'/>
        ) : (
            todo.isDone ? (
                <s className="todoCards">{todo.todo}</s>
            ): (
                <span className="todoCards">{todo.todo}</span>
            )
        )
        
    }
        
        <div className='icons'>
            <span className="icon" onClick={() => {if (!edit && !todo.isDone){setEdit(!edit)}}}> <AiFillEdit /> </span>
            <span className="icon" onClick={() => taskDelete(todo.id)}> <AiFillDelete/></span>
            <span className="icon" onClick={() => taskComplete(todo.id)}> <MdDone /> </span>
        </div>
    </form>
  )
}

export default SingleTodo
