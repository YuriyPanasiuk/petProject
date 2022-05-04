import React, { useDeferredValue, useState } from 'react';
import { usePubNub } from 'pubnub-react';
import { ChannelList, Input, User } from '../../molecules';
import { StyledContainer, StyledText } from './LeftSideChat.styles';
import users from '../../../users.json';

export interface OwnProps {
  handleIdChange: (newId: string | null) => void;
  activeChannelId: string | null;
}

const LeftSideChat: React.FC<OwnProps> = ({ handleIdChange, activeChannelId }) => {
  const pubnub = usePubNub();
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);

  const currentUser = users.find((u) => u.id === pubnub.getUUID());

  return (
    <StyledContainer>
      <User
        userData={{
          id: currentUser?.id,
          name: currentUser?.name,
          imageUrl: currentUser?.profileUrl
        }}
      />
      <Input label="Filter channel" value={query} onChange={setQuery} />
      <StyledText>Channels</StyledText>
      <ChannelList
        handleIdChange={handleIdChange}
        filterQuery={deferredQuery}
        activeChannelId={activeChannelId}
      />
    </StyledContainer>
  );
};

export default LeftSideChat;
