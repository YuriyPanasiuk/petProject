import React, { useState, useRef, useEffect } from 'react';
import { useAppDispatch } from 'src/config/store';
import { Button, List } from '@mui/material';
import { Input, TodoItem } from 'src/components/molecules';

import { StyledContainer, StyledText, StyledForm } from './Todos.styles';
import { TodosProps } from './Todos.types';
import { addNewTodo, deleteTodo, changeTodoStatus } from 'src/store/todo/todo.actions';

const TodoList: React.FC<TodosProps> = ({ todos = [] }) => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState('');
  const listRef = useRef<HTMLUListElement>(null);

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

  useEffect(() => {
    //scroll to bottom list
    const listElement = listRef.current;
    if (listElement) {
      listElement.scroll({ top: listElement.scrollHeight, behavior: 'smooth' });
    }
  }, [todos]);

  return (
    <StyledContainer>
      <StyledText>Todo List</StyledText>
      <StyledForm onSubmit={handleSubmit}>
        <Input value={value} label="Add new todo" onChange={setValue} />
        <Button variant="contained" onClick={handleSubmit}>
          Add
        </Button>
      </StyledForm>
      <List
        sx={{
          overflow: 'auto'
        }}
        ref={listRef}>
        {todos?.map((todo) => (
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
