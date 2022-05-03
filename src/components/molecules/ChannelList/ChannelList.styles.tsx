import { List, ListItem } from '@mui/material';
import styled from 'styled-components';
import { theme } from 'src/styles/theme';

export const StyledList = styled(List)`
  overflow: auto;

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-track {
    background: ${theme.colors.lightGray};
  }

  &::-webkit-scrollbar-thumb {
    background: #aeaeae;
  }
`;
