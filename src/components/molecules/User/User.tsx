import React from 'react';
import { ListItemAvatar, Avatar, ListItemText } from '@mui/material';
import { StyledListItem } from './User.styles';
import { UserProps } from './User.types';

const User: React.FC<UserProps> = ({ userData, handleIdChange, className }) => {
  const { name, id, imageUrl } = userData;

  const handleClick = () => {
    if (!handleIdChange || !id) {
      return;
    } else {
      handleIdChange(id);
    }
  };

  return (
    <StyledListItem alignItems="center" onClick={handleClick} className={className}>
      <ListItemAvatar>
        <Avatar alt={imageUrl || 'avatar'} src={imageUrl || ''} />
      </ListItemAvatar>
      <ListItemText primary={name} />
    </StyledListItem>
  );
};

export default User;
