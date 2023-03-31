import { configureStore } from '@reduxjs/toolkit'
import todoreducer from './todoSlice'
import updatedTodo from "./todoSlice";

export const store = configureStore({
  reducer: {
    todos: todoreducer,
  },
});