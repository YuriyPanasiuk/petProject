import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

export default styled(({ ...props }) => <Paper elevation={1} {...props} />)`
  height: 100%;
`;
