import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Container } from '../../atoms';

export const StyledContainer = styled(Container)`
  overflow: hidden;
  padding: 20px 0 10px 10px;
`;

export const StyledTextField = styled(({ ...props }) => <TextField {...props} />)`
  width: calc(100% - 10px);
  margin-bottom: 4px;
`;
