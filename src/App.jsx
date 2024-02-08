import React from 'react';

const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#290075] to-[#3e00b1]`,

}

function App() {

  //create todo
  //read todo
  //update todo
  //delete todo c
  
  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h1 className={style.heading}>Todo App</h1>
        <form className={style.form}>
          <input type="text" placeholder="Add Todo" className={style.input} />
          <button type="submit" className={style.button}>Add</button>
        </form>
      </div>
    </div>
  )
}

export default App;