import {  createSlice } from "@reduxjs/toolkit";
const todoSlice = createSlice({
  name: "todos",
  initialState: {
    lists: [
      { id: 1, title: "Test Data", completed: false },
      { id: 2, title: "Test 2", completed: false },
      { id: 3, title: "Test 3", completed: false },
      { id: 4, title: "Test 4", completed: true },
      { id: 5, title: "Test 5", completed: false },
      { id: 6, title: "Test 6", completed: false },
      { id: 7, title: "Test 7", completed: false },
      { id: 8, title: "Test 7", completed: false },
    ],
    updatedTodo: {
      item: {},
      edit: false,
    },
  },
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };
      state.lists.unshift(newTodo);
    },

    toggleComplete: (state, action) => {
      const index = state.lists.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.lists[index].completed = action.payload.completed;
    },

    deleteTodo: (state, action) => {
      state.lists = state.lists.filter((todo) => todo.id !== action.payload.id);
    },
    deleteCheckedTask: (state, action) => {
      state.lists = state.lists.filter((todo) => todo.completed !== true);
    },

    editTodo: (state, action) => {
      state.updatedTodo = {
        item: action.payload.title,
        edit: true,
      };
    },
    updateTodo: (state, action) => {
      state.lists = state.lists.map((todo) =>
        todo.id === action.payload.id ? { ...todo, ...action.payload.title } : todo
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