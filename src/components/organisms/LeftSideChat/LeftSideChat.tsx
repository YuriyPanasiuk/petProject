import React, { useDeferredValue, useState } from 'react';
import { ChannelList, Input, User } from '../../molecules';
import { StyledContainer, StyledText } from './LeftSideChat.styles';
import { useSelector } from 'react-redux';
import { getUser } from 'src/store/common/common.selector';

export interface OwnProps {
  handleIdChange: (newId: string | null) => void;
  activeChannelId: string | null;
}

const LeftSideChat: React.FC<OwnProps> = ({ handleIdChange, activeChannelId }) => {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);
  const user = useSelector(getUser);

  return (
    <StyledContainer>
      <User
        userData={{
          id: user?.googleId,
          name: user?.name,
          imageUrl: user?.imageUrl
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
