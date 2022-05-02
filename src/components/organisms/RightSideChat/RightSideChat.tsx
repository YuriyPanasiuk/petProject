import React, { useEffect, useState } from 'react';
import { StyledContainer } from './RightSideChat.styles';
import { usePubNub } from 'pubnub-react';
import {
  Chat,
  MessageInput,
  MessageList,
  TypingIndicator,
  useChannels,
  useUsers
} from '@pubnub/react-chat-components';
import users from '../../../users.json';

interface Props {
  id: string | null;
}

const currentChannel = 'Default';
const theme = 'light';

type Message = string | { text: string };

const RightSideChat: React.FC<any> = ({ id }) => {
  console.log('render');
  const pubnub = usePubNub();
  const [channels, fetchPage, total, error] = useChannels();
  console.log(channels);

  return (
    <StyledContainer>
      {!id ? (
        <h1>Please, select channel</h1>
      ) : (
        <Chat currentChannel={id} users={users}>
          <MessageList enableReactions fetchMessages={100}>
            <TypingIndicator />
          </MessageList>
          <MessageInput />
        </Chat>
      )}
    </StyledContainer>
  );
};

export default RightSideChat;
