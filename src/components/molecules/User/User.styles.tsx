import { ListItem } from '@mui/material';
import styled from 'styled-components';
import { theme } from 'src/styles/theme';

export const StyledListItem = styled(ListItem)`
  padding: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background 0.3s;

  &:hover,
  &.active {
    background: ${theme.colors.lightGray};
  }
`;
