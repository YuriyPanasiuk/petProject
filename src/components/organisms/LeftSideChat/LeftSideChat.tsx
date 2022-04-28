import * as React from 'react';
import { UsersList } from '../../molecules';
import { StyledContainer, StyledTextField } from './LeftSideChat.styles';

export interface OwnProps {
  handleIdChange: (newId: string | null) => void;
}

const LeftSideChat: React.FC<OwnProps> = ({ handleIdChange }) => (
  <StyledContainer>
    <StyledTextField label="Search" variant="outlined" />
    <UsersList handleIdChange={handleIdChange} />
  </StyledContainer>
);

export default LeftSideChat;
