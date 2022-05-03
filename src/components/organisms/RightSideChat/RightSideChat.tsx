import React from 'react';
import { StyledContainer, StyledText } from './RightSideChat.styles';
import { Chat, MessageInput, MessageList } from '@pubnub/react-chat-components';
import users from '../../../users.json';

interface Props {
  id: string | null;
}

const RightSideChat: React.FC<Props> = ({ id }) => (
  <StyledContainer>
    {!id ? (
      <StyledText>Please, select channel</StyledText>
    ) : (
      <Chat currentChannel={id} users={users}>
        <MessageList enableReactions fetchMessages={100} />
        <MessageInput />
      </Chat>
    )}
  </StyledContainer>
);

export default RightSideChat;
