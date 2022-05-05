import { Paper } from '@mui/material';
import styled from 'styled-components';

export const StyledContainer = styled(Paper)`
  padding: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledText = styled.h3`
  margin: 20px 0;
  font-size: 24px;
  text-transform: uppercase;
  text-align: center;
`;

export const StyledForm = styled.form`
  display: flex;
  margin: 10px 0;
`;
