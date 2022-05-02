import React from 'react';

import { LeftSideChat, RightSideChat } from '../../organisms';
import PubNub from 'pubnub';
import { PubNubProvider, usePubNub } from 'pubnub-react';
import users from '../../../users.json';

const pubnub = new PubNub({
  publishKey: 'pub-c-34d2d9ab-ac46-4db7-acc7-6a13cdcf5e83',
  subscribeKey: 'sub-c-4b66e8e6-c796-11ec-b93e-fed9c56767c0',
  uuid: users[Math.floor(Math.random() * users.length)].id
});

const Chat = () => {
  const [id, setId] = React.useState<string | null>(null);

  const handleIdChange = React.useCallback((newId: string | null) => {
    setId(newId);
  }, []);

  return (
    <PubNubProvider client={pubnub}>
      <LeftSideChat handleIdChange={handleIdChange} />
      <RightSideChat id={id} />
    </PubNubProvider>
  );
};

export default Chat;
