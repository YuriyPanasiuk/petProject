import React from 'react';
import { LeftSideChat, RightSideChat } from '../../organisms';
import PubNub from 'pubnub';
import { PubNubProvider } from 'pubnub-react';
import users from '../../../users.json';

const pubnub = new PubNub({
  publishKey: process.env.REACT_APP_PUBNUB_PUBLISH_KEY,
  subscribeKey: process.env.REACT_APP_PUBNUB_SUBSCRIBE_KEY || '',
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
