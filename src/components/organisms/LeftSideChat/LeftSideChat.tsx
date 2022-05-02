import React, { useDeferredValue, useState } from 'react';
import { ChannelList } from '../../molecules';
import { StyledContainer, StyledTextField } from './LeftSideChat.styles';

export interface OwnProps {
  handleIdChange: (newId: string | null) => void;
}

const LeftSideChat: React.FC<OwnProps> = ({ handleIdChange }) => {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setQuery(e.target.value);
  };

  return (
    <StyledContainer>
      <StyledTextField
        label="Filter channel"
        variant="outlined"
        value={query}
        onChange={handleFilter}
      />
      <ChannelList handleIdChange={handleIdChange} filterQuery={deferredQuery} />
    </StyledContainer>
  );
};

export default LeftSideChat;
