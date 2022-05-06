import React from 'react';
import { AppBar, Avatar, Box, IconButton, Menu, Tooltip } from '@mui/material';
import { useSelector } from 'react-redux';

import { pages } from 'src/config/constants';
import { StyledContainer, StyledNav, StyledLink } from './Header.styles';
import { getUser } from 'src/store/common/common.selector';
import { LogoutButton } from 'src/components/molecules';

const Header = () => {
  const user = useSelector(getUser);
  const [isOpenMenu, setIsOpenMenu] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

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
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={() => setIsOpenMenu(true)} ref={anchorRef}>
              <Avatar alt="Remy Sharp" src={user?.imageUrl} />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            anchorEl={anchorRef.current}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            open={isOpenMenu}
            onClose={() => setIsOpenMenu(false)}>
            <LogoutButton handleClose={() => setIsOpenMenu(false)} />
          </Menu>
        </Box>
      </StyledContainer>
    </AppBar>
  );
};
export default Header;
