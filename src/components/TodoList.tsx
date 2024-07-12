import React from 'react';
import "./styles.css";
import { Todo } from '../model';
import SingleTodo from './SingleTodo';

interface Props{
    list: Todo[],
    setList: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<Props> = ({list, setList}: Props) => {
  return (
    <div className='todos'>
        {list.map((todo)=>(
            <SingleTodo todo={todo} key={todo.id} list={list} setList={setList}/>

        ))}
    </div>
  )
}

export default TodoList;
