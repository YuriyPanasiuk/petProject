import { TextField } from '@mui/material';
import { theme } from 'src/styles/theme';
import styled from 'styled-components';
import { Container } from '../../atoms';

export const StyledContainer = styled(Container)`
  padding: 20px 0 10px 10px;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  position: relative;
  width: 350px;
`;

export const StyledTextField = styled(TextField)`
  width: calc(100% - 10px);
  margin: 10px 0;
`;

export const StyledText = styled.h3`
  color: ${theme.colors.secondary};
  margin-top: 20px;
`;
