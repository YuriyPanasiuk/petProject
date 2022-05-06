import React, { useState } from 'react';
import { useAppDispatch } from 'src/config/store';
import { Button, List } from '@mui/material';
import { Input, TodoItem } from 'src/components/molecules';

import { StyledContainer, StyledText, StyledForm } from './Todos.styles';
import { TodosProps } from './Todos.types';
import { addNewTodo, deleteTodo, changeTodoStatus } from 'src/store/todo/todo.actions';

const TodoList: React.FC<TodosProps> = ({ todos }) => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!value.trim().length) {
      return;
    }

    const newTodo = {
      id: Date.now(),
      title: value.trimStart(),
      userId: 1,
      completed: false
    };

    dispatch(addNewTodo(newTodo));
    setValue('');
  };

  return (
    <StyledContainer>
      <StyledText>Todo List</StyledText>
      <StyledForm onSubmit={handleSubmit}>
        <Input value={value} label="Add new todo" onChange={setValue} />
        <Button variant="contained" onClick={handleSubmit}>
          Add
        </Button>
      </StyledForm>
      <List>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleDelete={() => dispatch(deleteTodo(todo.id))}
            handleToggle={() => dispatch(changeTodoStatus(todo))}
            labelId={`checkbox-list-label-${todo.id}`}
          />
        ))}
      </List>
    </StyledContainer>
  );
};
export default TodoList;
