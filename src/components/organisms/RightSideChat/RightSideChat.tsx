import React, { useMemo } from 'react';
import { StyledContainer, StyledText } from './RightSideChat.styles';
import { Chat, MessageInput, MessageList } from '@pubnub/react-chat-components';
import { useSelector } from 'react-redux';
import { getUser } from 'src/store/common/common.selector';
import { ObjectCustom, UUIDMetadataObject } from 'pubnub';
import { UserType } from 'src/types/common';

interface Props {
  channelId: string | null;
}
const RightSideChat: React.FC<Props> = ({ channelId }) => {
  const user = useSelector(getUser) as UserType;

  const preparedUserForChat: UUIDMetadataObject<ObjectCustom> = useMemo(() => {
    return {
      id: user.id,
      name: user.name,
      profileUrl: user?.imageUrl,
      eTag: 'test',
      created: `${new Date()}`,
      updated: `${new Date()}`
    };
  }, [user]);

  return (
    <StyledContainer>
      {!channelId ? (
        <StyledText>Please, select channel</StyledText>
      ) : (
        <Chat currentChannel={channelId} users={[preparedUserForChat]}>
          <MessageList enableReactions fetchMessages={100} />
          <MessageInput senderInfo={true} />
        </Chat>
      )}
    </StyledContainer>
  );
};

export default RightSideChat;
