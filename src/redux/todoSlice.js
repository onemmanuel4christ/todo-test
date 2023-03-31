import {  createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "Todos",
  initialState: [
    { id: 1, title: "Test Data", completed: false },
  ],
  reducers: {
    addTodo: ((state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false
      }
      state.unshift(newTodo);
    }),
    toggleComplete: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    }
  },
});

export const { addTodo, toggleComplete } = todoSlice.actions;

export default todoSlice.reducer;