import React, { useMemo } from 'react';
import { Query, ShipsListQuery } from '../../../generated/graphql';
import { StyledList, StyledListItem } from './UsersList.styles';
import { ListItemAvatar, Avatar, ListItemText, Divider } from '@mui/material';

export interface OwnProps {
  handleIdChange: (newId: string | null) => void;
  filterQuery: string;
}

interface Props extends OwnProps {
  data: ShipsListQuery;
}

const UsersList: React.FC<Props> = ({ data, handleIdChange, filterQuery }) => {
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
      {!!data.ships &&
        filteredShips.map(
          (ship: Query['ship']) =>
            !!ship && (
              <React.Fragment key={ship.ship_id}>
                <StyledListItem
                  alignItems="center"
                  onClick={() => handleIdChange(ship.ship_id || null)}>
                  <ListItemAvatar>
                    <Avatar alt={ship.ship_name || 'avatar'} src={ship.image || ''} />
                  </ListItemAvatar>
                  <ListItemText primary={ship?.ship_name} />
                </StyledListItem>
                <Divider component="li" />
              </React.Fragment>
            )
        )}
    </StyledList>
  );
};

export default UsersList;
