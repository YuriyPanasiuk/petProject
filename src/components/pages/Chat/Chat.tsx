import React, { useEffect } from 'react';
import { LeftSideChat, RightSideChat } from '../../organisms';
import PubNub from 'pubnub';
import { PubNubProvider } from 'pubnub-react';
import users from '../../../users.json';

const user = localStorage.getItem('user');
const randomUser = users[Math.floor(Math.random() * users.length)].id;

const pubnub = new PubNub({
  publishKey: process.env.REACT_APP_PUBNUB_PUBLISH_KEY,
  subscribeKey: process.env.REACT_APP_PUBNUB_SUBSCRIBE_KEY || '',
  uuid: user ? user : randomUser
});

const Chat = () => {
  const [id, setId] = React.useState<string | null>(null);

  const handleIdChange = React.useCallback((newId: string | null) => {
    setId(newId);
  }, []);

  useEffect(() => {
    if (!user) {
      localStorage.setItem('user', randomUser);
    }
  }, []);

  return (
    <PubNubProvider client={pubnub}>
      <LeftSideChat handleIdChange={handleIdChange} activeChannelId={id} />
      <RightSideChat id={id} />
    </PubNubProvider>
  );
};

export default Chat;
