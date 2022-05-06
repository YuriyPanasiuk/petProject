import React, { useMemo } from 'react';
import { StyledContainer, StyledText } from './RightSideChat.styles';
import { Chat, MessageInput, MessageList } from '@pubnub/react-chat-components';
import { useSelector } from 'react-redux';
import { getUser } from 'src/store/common/common.selector';

interface Props {
  channelId: string | null;
}
const RightSideChat: React.FC<Props> = ({ channelId }) => {
  const user = useSelector(getUser);

  //temporary
  const preparedUserForChat: any = useMemo(() => {
    return {
      id: user?.googleId,
      name: user?.name,
      profileUrl: user?.imageUrl
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
