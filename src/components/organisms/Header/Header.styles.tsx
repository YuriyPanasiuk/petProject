import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { theme } from 'src/styles/theme';

export const StyledContainer = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4%;
`;
export const StyledNav = styled.nav`
  display: flex;
`;

export const StyledLink = styled(NavLink)`
  padding: 10px 20px;
  color: ${theme.colors.gray};
  font-size: ${theme.typography.fontSize.r};
  font-weight: ${theme.typography.fontWeight.semiBold};
  text-transform: uppercase;
  text-decoration: none;
  transition: color 0.3s;

  &.active,
  &:hover {
    color: ${theme.colors.backgroundYellow};
  }
`;
