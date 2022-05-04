import * as React from 'react';
import { useShipsListQuery } from '../../../generated/graphql';
import ChannelList, { OwnProps } from './ChannelList';

const ChannelListContainer: React.FC<OwnProps> = (props) => {
  const { data, error, loading } = useShipsListQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  return <ChannelList data={data} {...props} />;
};

export default ChannelListContainer;
