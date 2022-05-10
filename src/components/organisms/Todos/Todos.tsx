import React, { useState } from 'react';
import { useAppDispatch } from 'src/config/store';
import { Button, List } from '@mui/material';
import { TodoItem } from 'src/components/molecules';

import { StyledContainer, StyledText } from './Todos.styles';
import { TodosProps } from './Todos.types';
import { addNewTodo, deleteTodo, editTodo } from 'src/store/todo/todo.actions';

const TodoList: React.FC<TodosProps> = ({ todos }) => {
  const dispatch = useAppDispatch();
  const [newTitle, setNewTitle] = useState('');
  const [editTodoId, setEditTodoId] = useState<number | null>(null);
  const [isNeedAddNewTodo, setIsNeedAddNewTodo] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewTitle(event.target.value);
  };

  const handleEdit = (todo: any) => {
    setEditTodoId(todo.id);
    setNewTitle(todo.title);
  };

  const handleAddNewTodo = () => {
    setNewTitle('');
    setIsNeedAddNewTodo(true);
  };

  const onKeyPress = (e: any, todo: any) => {
    if (!e.shiftKey && e.keyCode === 13) {
      e.preventDefault();
      if (!newTitle.trim().length) {
        return;
      }

      if (isNeedAddNewTodo) {
        const newTodo = {
          ...testTodo,
          title: newTitle
        };
        dispatch(addNewTodo(newTodo));
        setNewTitle('');
      } else {
        dispatch(editTodo({ ...todo, title: newTitle }));
        setEditTodoId(null);
        setNewTitle('');
        setIsNeedAddNewTodo(true);
      }
    }
  };

  const handleBlur = () => {
    setEditTodoId(null);
    if (!newTitle.trim().length) {
      setIsNeedAddNewTodo(false);
    }
  };

  const testTodo = {
    userId: 1,
    id: +new Date(),
    completed: false,
    title: ''
  };

  return (
    <StyledContainer>
      <StyledText>Todo List</StyledText>
      <List>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChange={handleChange}
            newTitle={newTitle}
            handleDelete={() => dispatch(deleteTodo(todo.id))}
            handleToggle={() => dispatch(editTodo({ ...todo, completed: !todo.completed }))}
            handleEdit={() => handleEdit(todo)}
            onEditSave={(e: any) => onKeyPress(e, todo)}
            labelId={`checkbox-list-label-${todo.id}`}
            isEdit={todo.id === editTodoId}
            handleBlur={handleBlur}
          />
        ))}
        {isNeedAddNewTodo && (
          <textarea
            value={newTitle}
            onChange={handleChange}
            onKeyDown={(e: any) => onKeyPress(e, testTodo)}
            onBlur={handleBlur}
          />
        )}
      </List>
      <Button variant="contained" onClick={handleAddNewTodo}>
        Add new todo
      </Button>
    </StyledContainer>
  );
};
export default TodoList;
