import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { theme } from 'src/styles/theme';

export default styled(({ ...props }) => <Paper elevation={1} {...props} />)`
  height: calc(100vh - 60px);
  margin-top: 60px;
  background: ${theme.colors.backgroundGray};
`;
