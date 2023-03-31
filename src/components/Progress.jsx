import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { deleteCheckedTask } from "../redux/todoSlice";
import { useDispatch } from "react-redux";

export default function Progress() {
  const [progressPercent, setProgressPercent] = useState(0);
  const totalTodos = useSelector((state) => state.todos.lists);
  // const completedTask = useSelector((state) => state.todos.lists.filter((todo) => todo.completed === true))
  const completedTask = totalTodos.filter((item) => item.completed === true);
  const dispatch = useDispatch();

  const handleDeleteCLick = () => {
    dispatch(deleteCheckedTask());
  };

  useEffect(() => {
    const progressFunc = () => {
      if (completedTask.length > 0) {
        setProgressPercent((completedTask.length / totalTodos.length) * 100);
      }
    };
    progressFunc();
  }, [completedTask.length, totalTodos.length]);

  return (
    <div className="w-full flex items-center justify-between my-5 flex-col md:flex-row">
      <div className="md:w-[200px] bg-[#19A7CE] p-2 relative w-full md:mb-2 mb-5 rounded-sm overflow-hidden">
        <div
          className={`absolute bg-[#f4f13cc4] top-0 bottom-0 left-0 right-0`}
          style={{ width: `${progressPercent}%` }}
        ></div>
        {completedTask.length === totalTodos.length ? (
          <p className="text-white font-semibold text-center">
            All tasks Completed
          </p>
        ) : (
          <p className="text-white font-semibold text-center">
            {completedTask.length} of {totalTodos.length} tasks done{" "}
            {Math.round(progressPercent)}%
          </p>
        )}
      </div>
      <button
        onClick={handleDeleteCLick}
        className="md:w-[200px] w-full justify-between flex items-center gap-2 text-white bg-[#19A7CE] font-semibold p-2 rounded-sm"
      >
        Remove checked{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-4 h-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
}
