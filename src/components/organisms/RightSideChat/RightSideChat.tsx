import * as React from 'react';
import { StyledContainer } from './RightSideChat.styles';

interface Props {
  id: string | null;
}

const RightSideChat: React.FC<Props> = ({ id }) => (
  <StyledContainer>
    <h2>Chat - {id}</h2>
  </StyledContainer>
);

export default RightSideChat;
