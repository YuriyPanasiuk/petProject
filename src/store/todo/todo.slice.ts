import { createSlice } from '@reduxjs/toolkit';
import { Todo, TodoState } from 'types/todo';
import { fetchTodos, deleteTodo, addNewTodo, changeTodoStatus } from './todo.actions';

const initialState: TodoState = {
  todos: [],
  isLoading: true,
  error: null,
  user: null
};

const errorHandler = (state: TodoState, payload: string) => {
  state.isLoading = false;
  state.error = payload;
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },

    removeTodo: (state, action) => {
      const id = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },

    toggleTodo: (state, action) => {
      const { id, completed } = action.payload;

      state.todos = state.todos.map((todo: Todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !completed
          };
        } else {
          return todo;
        }
      });
    },
    addUser: (state, action) => {
      state.user = action.payload;
    }
  },

  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.todos = action.payload;
    });
    builder.addCase(fetchTodos.rejected, (state, action) =>
      errorHandler(state, action.payload as string)
    );
    builder.addCase(deleteTodo.rejected, (state, action) =>
      errorHandler(state, action.payload as string)
    );
    builder.addCase(addNewTodo.rejected, (state, action) =>
      errorHandler(state, action.payload as string)
    );
    builder.addCase(changeTodoStatus.rejected, (state, action) =>
      errorHandler(state, action.payload as string)
    );
  }
});

export const { addTodo, removeTodo, toggleTodo, addUser } = todoSlice.actions;

export default todoSlice.reducer;
