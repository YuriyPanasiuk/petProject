import { createAsyncThunk } from '@reduxjs/toolkit';
import { Todo } from 'src/types/todo';
import { addTodo, removeTodo, toggleTodo } from './todo.slice';

const todosApi = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = createAsyncThunk(
  'todo/fetchTodos',
  async function (_, { rejectWithValue }) {
    try {
      const responce = await fetch(`${todosApi}?_limit=10`);
      if (!responce.ok) {
        throw new Error(`Server error, status code - ${responce.status}`);
      }
      const data = await responce.json();
      return data;
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  }
);

export const deleteTodo = createAsyncThunk(
  'todo/deleteTodo',
  async function (id: number, { rejectWithValue, dispatch }) {
    try {
      const responce = await fetch(`${todosApi}/${id}`, {
        method: 'DELETE'
      });

      if (!responce.ok) {
        throw new Error(`Server error, status code - ${responce.status}`);
      }
      dispatch(removeTodo(id));
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  }
);

export const addNewTodo = createAsyncThunk(
  'todo/addNewtodo',
  async function (newTodo: Todo, { rejectWithValue, dispatch }) {
    try {
      const responce = await fetch(`${todosApi}`, {
        method: 'POST',
        body: JSON.stringify(newTodo),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      });

      if (!responce.ok) {
        throw new Error(`Server error, status code - ${responce.status}`);
      }
      dispatch(addTodo(newTodo));
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  }
);

export const changeTodoStatus = createAsyncThunk(
  'todo/changeTodoStatus',
  async function (todo: Todo, { rejectWithValue, dispatch }) {
    try {
      const responce = await fetch(`${todosApi}/${todo.id}`, {
        method: 'PATCH',
        body: JSON.stringify({
          completed: !todo.completed
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      });

      if (!responce.ok) {
        throw new Error(`Server error, status code - ${responce.status}`);
      }

      dispatch(toggleTodo(todo));
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  }
);
