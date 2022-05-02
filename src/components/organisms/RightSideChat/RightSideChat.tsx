import React from 'react';
import { StyledContainer } from './RightSideChat.styles';
import { Chat, MessageInput, MessageList } from '@pubnub/react-chat-components';
import users from '../../../users.json';

interface Props {
  id: string | null;
}

const RightSideChat: React.FC<Props> = ({ id }) => {
  return (
    <StyledContainer>
      {!id ? (
        <h3>Please, select channel</h3>
      ) : (
        <Chat currentChannel={id} users={users}>
          <MessageList enableReactions fetchMessages={100} />
          <MessageInput />
        </Chat>
      )}
    </StyledContainer>
  );
};

export default RightSideChat;
