import React, { useDeferredValue, useState } from 'react';
import { usePubNub } from 'pubnub-react';
import { ChannelList, User } from '../../molecules';
import { StyledContainer, StyledTextField, StyledText } from './LeftSideChat.styles';
import users from '../../../users.json';

export interface OwnProps {
  handleIdChange: (newId: string | null) => void;
  activeChannelId: string | null;
}

const LeftSideChat: React.FC<OwnProps> = ({ handleIdChange, activeChannelId }) => {
  const pubnub = usePubNub();
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setQuery(e.target.value);
  };

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
      <StyledTextField
        label="Filter channel"
        variant="outlined"
        value={query}
        onChange={handleFilter}
      />
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
