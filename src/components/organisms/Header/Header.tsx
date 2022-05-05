import React, { useLayoutEffect, useState } from 'react';
import { AppBar, Avatar, IconButton } from '@mui/material';

import { pages } from 'src/config/constants';
import { StyledContainer, StyledNav, StyledLink } from './Header.styles';
import { useSelector } from 'react-redux';
import { todoSelector } from 'src/store/todo/todo.selector';

const Header = () => {
  const { user } = useSelector(todoSelector);
  console.log(user);
  return (
    <AppBar position="fixed">
      <StyledContainer>
        <StyledNav>
          {pages.map((page) => (
            <StyledLink key={page.title} to={page.href}>
              {page.title}
            </StyledLink>
          ))}
        </StyledNav>
        <IconButton>
          <Avatar alt="Remy Sharp" src={user?.profileUrl} />
        </IconButton>
      </StyledContainer>
    </AppBar>
  );
};
export default Header;
