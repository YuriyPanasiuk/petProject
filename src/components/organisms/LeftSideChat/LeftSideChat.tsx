import React, { useDeferredValue, useState, Suspense } from 'react';
import { UsersList } from '../../molecules';
import { StyledContainer, StyledTextField } from './LeftSideChat.styles';

export interface OwnProps {
  handleIdChange: (newId: string | null) => void;
}

const LeftSideChat: React.FC<OwnProps> = ({ handleIdChange }) => {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);

  const handleFilter = (e: any) => {
    console.log('render');
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
      <UsersList handleIdChange={handleIdChange} filterQuery={deferredQuery} />
    </StyledContainer>
  );
};

export default LeftSideChat;
