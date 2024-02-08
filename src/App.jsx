import React, { useState, useEffect } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import Todo from './components/Todo';
import { query, collection, onSnapshot, updateDoc, doc } from 'firebase/firestore';
import { db } from './firebase';

const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#290075] to-[#3e00b1]`,
  container: `bg-slate-100 max-w- [500px w-full m-auto] rounded-md shadow-xl p-4`,
  heading: `text-3xl font-bold text-black mb-4 text-center`,
  form: `flex items-center`,
  input: `w-full p-2 rounded-md shadow-md`,
  button: `bg-white text-[#290075] rounded-md p-2 ml-2`,
  list: `mt-4`,
  p: `text-center`
}

function App() {

  const [todos, setTodos] = useState([]);

  //create todo

  //read todo
  useEffect(() => {
    const q  = query(collection(db, "todo")); //create a firestore query to retrieve all documents from the collection
    const unsubscribe = onSnapshot(q, (querySnapshot) => { //listen to changes to the query, when changes occur the callback function is called with a new snapshot
      let todosArr = []; //store fetched tools
      querySnapshot.forEach((doc) => { //loop through the documents in the snapshot
        todosArr.push({...doc.data(), id: doc.id}); //push the document data and id to the todosArr
      });
      setTodos(todosArr); //set the todos state to the todosArr
  });
  return () => unsubscribe();
  }, []);


  //update todo
  const toggleComplete = async (todo) => { //create a function to toggle the completed status of a todo
    await updateDoc(doc(db, "todo", todo.id), { //update the document with the id of the todo
      completed: !todo.completed //set the completed field to the opposite of the current value
    });
  }


  //delete todo

  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h1 className={style.heading}>Todo App</h1>
        <form className={style.form}>
          <input type="text" placeholder="Add Todo" className={style.input} />
          <button type="submit" className={style.button}><AiOutlinePlus size={30} /></button>
        </form>
        <ul className={style.list}>
          {todos.map((todo, index) => (
            <Todo key={index} todo={todo} toggleComplete={toggleComplete} />
          ))}
        </ul>
        <p className={style.p}>You have {todos.length} {todos.length > 1 ? "todos" : "todo"} left</p>
      </div>
    </div>
  )
}

export default App;