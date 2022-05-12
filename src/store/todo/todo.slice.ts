import { createSlice } from '@reduxjs/toolkit';
import { Todo, TodoState } from 'types/todo';
import { fetchTodos, deleteTodo, addNewTodo, editTodo } from './todo.actions';

const initialState: TodoState = {
  todos: null,
  isLoading: true,
  error: null
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
      state.todos?.push(action.payload);
    },

    removeTodo: (state, action) => {
      const id = action.payload;
      state.todos = state.todos?.filter((todo) => todo.id !== id) || [];
    },

    editTodoState: (state, action) => {
      const newTodo = action.payload;

      state.todos =
        state.todos?.map((todo: Todo) => {
          if (todo.id === newTodo.id) {
            return newTodo;
          } else {
            return todo;
          }
        }) || [];
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
    builder.addCase(editTodo.rejected, (state, action) =>
      errorHandler(state, action.payload as string)
    );
  }
});

export const { addTodo, removeTodo, editTodoState } = todoSlice.actions;

export default todoSlice.reducer;
