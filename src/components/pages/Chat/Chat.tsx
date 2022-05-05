import React from 'react';
import { LeftSideChat, RightSideChat } from '../../organisms';

import { PubNubProvider } from 'pubnub-react';
import { StyledContainer } from './Chat.styles';

const Chat: React.FC<any> = ({ pubnubClient }) => {
  const [id, setId] = React.useState<string | null>(null);

  const handleIdChange = React.useCallback((newId: string | null) => {
    setId(newId);
  }, []);

  return (
    <PubNubProvider client={pubnubClient}>
      <StyledContainer>
        <LeftSideChat handleIdChange={handleIdChange} activeChannelId={id} />
        <RightSideChat id={id} />
      </StyledContainer>
    </PubNubProvider>
  );
};

export default Chat;
