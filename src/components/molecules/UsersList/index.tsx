import * as React from 'react';
import { useShipsListQuery } from '../../../generated/graphql';
import UsersList, { OwnProps } from './UsersList';

const LaunchListContainer: React.FC<OwnProps> = (props) => {
  const { data, error, loading } = useShipsListQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  return <UsersList data={data} {...props} />;
};

export default LaunchListContainer;
