import * as React from 'react';
import { RocketInfoQuery } from '../../../generated/graphql';

interface Props {
  data: RocketInfoQuery;
}

const className = 'LaunchProfile';

const Item: React.FC<Props> = ({ data }) => {
  if (!data.ship) {
    return <div>No launch available</div>;
  }
  console.log(data);
  return <div className={className}></div>;
};

export default Item;
