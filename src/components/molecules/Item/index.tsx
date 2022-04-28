import React, { useEffect } from 'react';
import { useRocketInfoQuery } from '../../../generated/graphql';
import Item from './Item';

interface OwnProps {
  id: number;
}

const LaunchProfileContainer: React.FC<OwnProps> = ({ id }) => {
  const { data, error, loading, refetch } = useRocketInfoQuery({ variables: { id: '' + id } });

  useEffect(() => {
    refetch({ id: String(id) });
  }, [id, refetch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>ERROR</div>;
  }

  if (!data) {
    return <div>Select a flight from the panel</div>;
  }

  return <Item data={data} />;
};

export default LaunchProfileContainer;
