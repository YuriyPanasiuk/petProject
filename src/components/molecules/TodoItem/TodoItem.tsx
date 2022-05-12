import React, { useState, useRef, useEffect } from 'react';
import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import { Todo } from 'src/types/todo';
import { useAppDispatch } from 'src/config/store';
import { deleteTodo, editTodo } from 'src/store/todo/todo.actions';

interface Props {
  todo: Todo;
  labelId: string;
  handleNeedAddNewTodo: (value: boolean) => void;
}

const TodoItem: React.FC<Props> = ({ todo, labelId, handleNeedAddNewTodo }) => {
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [newTitle, setNewTitle] = useState('');
  const [editTodoId, setEditTodoId] = useState<number | null>(null);

  const handleEdit = () => {
    setEditTodoId(todo.id);
    setNewTitle(todo.title);
  };

  const onKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!e.shiftKey && e.keyCode === 13) {
      e.preventDefault();
      if (!newTitle.trim().length) {
        return;
      }
      dispatch(editTodo({ ...todo, title: newTitle }));
      setEditTodoId(null);
      setNewTitle('');
      handleNeedAddNewTodo(true);
    }
  };

  const handleBlur = () => {
    setEditTodoId(null);
  };

  useEffect(() => {
    if (inputRef && inputRef.current) {
      const end = inputRef.current.value.length;
      inputRef.current.setSelectionRange(end, end);
      inputRef.current.focus();
    }
  }, [editTodoId]);

  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" onClick={() => dispatch(deleteTodo(todo.id))}>
          <DeleteIcon />
        </IconButton>
      }
      disablePadding>
      <ListItemButton dense onDoubleClick={handleEdit}>
        <ListItemIcon onClick={() => dispatch(editTodo({ ...todo, completed: !todo.completed }))}>
          <Checkbox
            edge="start"
            checked={todo.completed}
            tabIndex={-1}
            disableRipple
            inputProps={{ 'aria-labelledby': labelId }}
          />
        </ListItemIcon>
        {editTodoId === todo.id ? (
          <TextField
            multiline
            maxRows={4}
            inputRef={inputRef}
            value={newTitle}
            onChange={({ target }) => setNewTitle(target.value)}
            onKeyDown={onKeyPress}
            onBlur={handleBlur}
            fullWidth
          />
        ) : (
          <ListItemText
            id={labelId}
            primary={todo.title}
            sx={{
              textDecoration: todo.completed ? 'line-through' : 'auto'
            }}
          />
        )}
      </ListItemButton>
    </ListItem>
  );
};

function todoPropsAreEqual(prevProps: Props, nextProps: Props) {
  return prevProps.todo === nextProps.todo;
}

export default React.memo(TodoItem, todoPropsAreEqual);
