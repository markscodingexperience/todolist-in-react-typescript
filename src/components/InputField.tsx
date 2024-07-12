import React, { useRef } from 'react'
import './styles.css';

interface Props {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    handleTodo: (e:React.FormEvent) => void
}

const InputField = ({todo, setTodo, handleTodo}: Props) => {
    const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form action="" className='form' 
        onSubmit={(e) => {
            handleTodo(e);
            inputRef.current?.blur(); 
        }
            
    } >
        <input ref={inputRef} type="text" placeholder='Enter task here' className='inputBox' value={todo} onChange={(e) => setTodo(e.target.value)}/>
        <button type="submit" className='inputButton'>Enter</button>
    </form>


  )
}

export default InputField
