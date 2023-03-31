import React from 'react';
import NewTodo from './components/NewTodo';
import Progress from './components/Progress';
import TodoList from './components/TodoList';


function App() {
  return (
    <div className="bg-white md:w-[800px] w-[90%] m-auto my-10 rounded-md shadow-md flex items-center justify-center flex-col p-5 md:px-10 ">
      <h1 className='font-bold text-2xl text-[#333] m-3'>TODOLIST</h1>
      <NewTodo /> 
      <TodoList />
      <Progress />
    </div>
  );
}

export default App;
