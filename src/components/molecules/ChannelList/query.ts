import { gql } from '@apollo/client';

export const QUERY_SHIPS_LIST = gql`
  query ShipsList {
    ships {
      ship_id
      ship_name
      image
    }
  }
`;
