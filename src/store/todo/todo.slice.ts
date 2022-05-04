import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { TodoState } from 'types/todo';

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

const initialState: TodoState = {
  todos: [],
  isLoading: true,
  error: null
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.todos = action.payload;
    });
    builder.addCase(fetchTodos.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });
  }
});

export default todoSlice.reducer;
