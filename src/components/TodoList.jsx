import React from 'react'
import Item from './Item';
import { useSelector } from 'react-redux';

export default function TodoList() {
const todos = useSelector((state) => state.todos);
console.log(todos)
  return (
    <ul className="w-full">
      {todos.map((todo) => (
        <Item id={todo.id} title={todo.title} completed={todo.completed} />
      ))}
    </ul>
  );
}
