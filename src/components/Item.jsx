import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTodo, editTodo } from "../redux/todoSlice";

export default function Item({ id, title, completed }) {
  const dispatch = useDispatch();

  const handleCompleteClick = () => {
    dispatch(toggleComplete({ id: id, completed: !completed }));
  };

  const handleDeleteCLick = (e) => {
    e.preventDefault()
    dispatch(deleteTodo({id}));
  };

    const handleEdit = (e) => {
        dispatch(editTodo({ id, title, completed }))
    } 
  return (
    <li
      className={`w-full text-[#19A7CE] font-semibold border-2 border-gray-100 p-1 my-2 ${
        completed && "bg-[#19ce952c]"
      }`}
    >
      <div className={`flex justify-between`}>
        <span
          className={`flex items-center gap-2  ${completed && "line-through"}`}
        >
          <input
            type="checkbox"
            className="mr-3"
            checked={completed}
            onChange={handleCompleteClick}
          ></input>
          {title}
        </span>
        <div className="flex items-center gap-2">
          <button onClick={handleEdit} className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
              />
            </svg>
          </button>
          <button onClick={handleDeleteCLick} className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </li>
  );
}
