import React, { useState, useRef, useEffect } from 'react';
import { useAppDispatch } from 'src/config/store';
import { Button, List, TextField } from '@mui/material';
import { TodoItem } from 'src/components/molecules';

import { StyledContainer, StyledText } from './Todos.styles';
import { TodosProps } from './Todos.types';
import { addNewTodo } from 'src/store/todo/todo.actions';

const TodoList: React.FC<TodosProps> = ({ todos = [] }) => {
  const dispatch = useAppDispatch();
  const [newTodoTitle, setNewTodoTitle] = useState('');
  const [isNeedAddNewTodo, setIsNeedAddNewTodo] = useState(false);
  const listRef = useRef<HTMLUListElement>(null);

  const handleAddNewTodo = () => {
    setIsNeedAddNewTodo(true);
    setNewTodoTitle('');
  };

  const onKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!e.shiftKey && e.keyCode === 13) {
      e.preventDefault();
      if (!newTodoTitle.trim().length) {
        return;
      }
      const newTodo = {
        userId: 1,
        id: +new Date(),
        completed: false,
        title: newTodoTitle
      };

      dispatch(addNewTodo(newTodo));
      setNewTodoTitle('');
    }
  };

  const handleBlur = () => {
    if (newTodoTitle) {
      return;
    }
    setNewTodoTitle('');
    setIsNeedAddNewTodo(false);
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
      <List
        sx={{
          overflow: 'auto'
        }}
        ref={listRef}>
        {todos?.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            labelId={`checkbox-list-label-${todo.id}`}
            handleNeedAddNewTodo={setIsNeedAddNewTodo}
          />
        ))}
      </List>
      {isNeedAddNewTodo && (
        <TextField
          autoFocus
          multiline
          value={newTodoTitle}
          onChange={({ target }) => setNewTodoTitle(target.value)}
          onKeyDown={onKeyPress}
          onBlur={handleBlur}
          fullWidth
        />
      )}
      <Button
        variant="contained"
        onClick={handleAddNewTodo}
        sx={{
          margin: '20px auto 0 0'
        }}>
        Add new todo
      </Button>
    </StyledContainer>
  );
};
export default TodoList;
