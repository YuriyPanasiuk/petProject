import React from 'react';
import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Todo } from 'src/types/todo';

interface Props {
  todo: Todo;
  labelId: string;
  handleDelete: () => void;
  handleToggle: () => void;
}

const TodoItem: React.FC<Props> = ({ todo, labelId, handleDelete, handleToggle }) => {
  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      }
      disablePadding>
      <ListItemButton onClick={handleToggle} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={todo.completed}
            tabIndex={-1}
            disableRipple
            inputProps={{ 'aria-labelledby': labelId }}
          />
        </ListItemIcon>
        <ListItemText
          id={labelId}
          primary={todo.title}
          sx={{
            textDecoration: todo.completed ? 'line-through' : 'auto'
          }}
        />
      </ListItemButton>
    </ListItem>
  );
};

export default TodoItem;
