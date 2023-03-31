import {  createSlice } from "@reduxjs/toolkit";
const todoSlice = createSlice({
  name: "Todos",
  initialState: [
    { id: 1, title: "Test Data", completed: false },
    { id: 2, title: "Test Data", completed: false },
    { id: 3, title: "Test Data", completed: false },
    { id: 4, title: "Test Data", completed: true },
    { id: 5, title: "Test Data", completed: false },
    { id: 6, title: "Test Data", completed: false },
    { id: 7, title: "Test Data", completed: false },
    { id: 8, title: "Test Data", completed: false },
  ],
  // updatedTodo: {
  //       item: {},
  //       edit: false
  //   },
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };
      state.unshift(newTodo);
    },
    toggleComplete: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
    deleteCheckedTask: (state, action) => {
      return state.filter((todo) => todo.completed !== true);
    },
    editTodo: (state, action) => {
      state.updatedTodo = {
        title: action.payload.title,
        edit: true,
      };
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload[0] ? { ...todo, ...action.payload[1] } : todo
      );
      state.updatedTodo = { item: {}, edit: false };
    },
  },
});

export const {
  addTodo,
  toggleComplete,
  deleteTodo,
  deleteCheckedTask,
  editTodo,
  updateTodo,
} = todoSlice.actions;

export default todoSlice.reducer;