import React from 'react';

import { LeftSideChat, RightSideChat } from '../../organisms';

const Chat = () => {
  const [id, setId] = React.useState<string | null>(null);

  const handleIdChange = React.useCallback((newId: string | null) => {
    setId(newId);
  }, []);

  return (
    <>
      <LeftSideChat handleIdChange={handleIdChange} />
      <RightSideChat id={id} />
    </>
  );
};

export default Chat;
