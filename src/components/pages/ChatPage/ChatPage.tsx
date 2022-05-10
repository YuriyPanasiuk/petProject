import React, { useEffect } from 'react';
import { usePubNub } from 'pubnub-react';
import { LeftSideChat, RightSideChat } from '../../organisms';
import { StyledContainer } from './ChatPage.styles';

const ChatPage = () => {
  const pubnub = usePubNub();
  const userId = localStorage.getItem('userId') as string;
  const [channelId, setChannelId] = React.useState<string | null>(null);

  const handleIdChange = React.useCallback((newChannelId: string | null) => {
    setChannelId(newChannelId);
  }, []);

  useEffect(() => {
    if (userId !== pubnub.getUUID()) {
      pubnub.setUUID(userId);
    }
  }, []);

  return (
    <StyledContainer>
      <LeftSideChat handleIdChange={handleIdChange} activeChannelId={channelId} />
      <RightSideChat channelId={channelId} />
    </StyledContainer>
  );
};

export default ChatPage;
