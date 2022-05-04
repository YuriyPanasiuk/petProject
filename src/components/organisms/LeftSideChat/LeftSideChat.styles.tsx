import { Input } from 'src/components/molecules';
import { theme } from 'src/styles/theme';
import styled from 'styled-components';

export const StyledContainer = styled.div`
  padding: 20px 10px 10px;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  position: relative;
  width: 350px;
`;

export const StyledTextField = styled(Input)`
  width: calc(100% - 10px);
  margin: 10px 0;
`;

export const StyledText = styled.h3`
  color: ${theme.colors.secondary};
  margin-top: 20px;
`;
