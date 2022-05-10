import React, { useState } from 'react';
import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
  Box
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Todo } from 'src/types/todo';
import { useAppDispatch } from 'src/config/store';
import { editTodo } from 'src/store/todo/todo.actions';

interface Props {
  todo: Todo;
  labelId: string;
  handleDelete: () => void;
  handleToggle: any;
  handleEdit: any;
  onEditSave: any;
  isEdit: boolean;
  handleBlur: any;
  handleChange: any;
  newTitle: any;
}

const TodoItem: React.FC<Props> = ({
  todo,
  labelId,
  handleDelete,
  handleChange,
  handleToggle,
  handleEdit,
  onEditSave,
  isEdit,
  handleBlur,
  newTitle
}) => {
  console.log('render');
  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      }
      disablePadding>
      <ListItemButton dense onDoubleClick={handleEdit}>
        <ListItemIcon onClick={handleToggle}>
          <Checkbox
            edge="start"
            checked={todo.completed}
            tabIndex={-1}
            disableRipple
            inputProps={{ 'aria-labelledby': labelId }}
          />
        </ListItemIcon>
        {isEdit ? (
          <textarea
            autoFocus
            value={newTitle}
            onChange={handleChange}
            onKeyDown={onEditSave}
            onBlur={handleBlur}
            style={{ resize: 'vertical', padding: '10px', width: '100%' }}
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
