import React, { useMemo } from 'react';
import { Query, ShipsListQuery } from '../../../generated/graphql';
import { StyledList } from './ChannelList.styles';
import { Divider } from '@mui/material';
import { User } from 'src/components/molecules';

export interface OwnProps {
  handleIdChange: (newId: string | null) => void;
  filterQuery: string;
  activeChannelId: string | null;
}

interface Props extends OwnProps {
  data: ShipsListQuery;
}

const ChannelList: React.FC<Props> = ({ data, handleIdChange, filterQuery, activeChannelId }) => {
  const filteredShips = useMemo(() => {
    if (!data || !data.ships) {
      return [];
    } else {
      return data.ships?.filter((ship) =>
        ship?.ship_name?.toLowerCase().includes(filterQuery.toLowerCase())
      );
    }
  }, [filterQuery]);

  return (
    <StyledList>
      {!!filteredShips &&
        filteredShips.map((ship: Query['ship']) => {
          const { ship_id, ship_name, image } = ship || {};
          return (
            <React.Fragment key={ship_id}>
              <User
                className={`${activeChannelId === ship_id ? 'active' : ''}`}
                handleIdChange={handleIdChange}
                userData={{ id: ship_id!, name: ship_name!, imageUrl: image! }}
              />
              <Divider component="li" />
            </React.Fragment>
          );
        })}
    </StyledList>
  );
};

export default ChannelList;
