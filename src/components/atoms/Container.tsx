import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

export default styled(({ ...props }) => <Paper elevation={1} {...props} />)`
  height: calc(100vh - 60px);
  margin-top: 60px;
`;
