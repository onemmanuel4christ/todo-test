import React from 'react'
import Item from './Item';
import { useSelector } from 'react-redux';

export default function TodoList() {
  const todos = useSelector((state) => state.todos.lists);
    let renderedTodos = todos;  
  return (
    <ul className="w-full">
      {renderedTodos?.map((todo) => (
        <Item key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} />
      ))}
    </ul>
  );
}
