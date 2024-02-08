import React from 'react'
import { FaRegTrashAlt } from 'react-icons/fa';

const style = {
    li: `flex justify-between items-center p-4 bg-white rounded-md shadow-lg mb-2`,
    liComplete: `flex justify-between items-center p-4 bg-green-100 rounded-md shadow-lg mb-2`,
    row: `flex items-center`,
    text: `ml-2 text-black font-semibold cursor-pointer hyphens`, 
    textComplete: `ml-2 line-through text-black font-semibold cursor-pointer`,
    button: `bg-red-500 text-white rounded-md p-2`,
    checkbox: `w-6 h-6 mr-4 rounded-md shadow-md cursor-pointer`
}

export default function Todo( { todo, toggleComplete } ) {
  return (
    <li className={todo.completed ? style.liComplete : style.li}>
        <div className={style.row}>
            <input onChange={() => toggleComplete(todo)} className={style.checkbox} type="checkbox" checked={todo.completed ? "checked" : ""}/>
            <p onClick={() => toggleComplete(todo)} className={todo.completed ? style.textComplete : style.text}>{todo.text}</p>
        </div>
        <button className={style.button}><FaRegTrashAlt /></button>
    </li>
  )
}
