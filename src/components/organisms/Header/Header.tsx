import React from 'react';
import { AppBar, Avatar, IconButton } from '@mui/material';

import { pages } from 'src/constants';
import { StyledContainer, StyledNav, StyledLink } from './Header.styles';

const Header = () => {
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
          <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
        </IconButton>
      </StyledContainer>
    </AppBar>
  );
};
export default Header;
