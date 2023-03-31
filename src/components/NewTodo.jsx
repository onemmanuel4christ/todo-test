import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, updateTodo } from "../redux/todoSlice";
import { toast } from "react-toastify";

export default function NewTodo() {
  const updatedTodo = useSelector((state) => state.todos.lists);
  const myed = useSelector((state) => state.todos.updatedTodo);
  const [value, setValue] = useState('');
  const dispatch = useDispatch()

  useEffect(() => {
    if (myed.edit === true) {
      setValue(myed.item);
    }
  }, [myed]);

  
  const onSubmit = (e) => {
      e.preventDefault();
      dispatch(
        addTodo({
          id: Date.now(),
          title: value,
          completed: false
        })
      );
    setValue('')
  }


  //  const onSubmit = (e) => {
  //    e.preventDefault();
  //    setValue
  //    dispatch(updateTodo({ title: value }));
  //  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex gap-2 w-full items-center justify-center mb-5"
    >
      <input
        type="text"
        className="flex-1 border-2 outline-none border-orange-300 rounded-sm p-2 uppercase"
        placeholder="Type your todo here"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        type="submit"
        className="bg-[#19A7CE] rounded-sm border-0 text-white p-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
    </form>
  );
}
