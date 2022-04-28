import { List, ListItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import { theme } from 'src/styles/theme';

export const StyledList = styled(({ ...props }) => <List {...props} />)`
  height: calc(100% - 60px);
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

export const StyledListItem = styled(({ ...props }) => <ListItem {...props} />)`
  padding: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: ${theme.colors.lightGray};
  }
`;
