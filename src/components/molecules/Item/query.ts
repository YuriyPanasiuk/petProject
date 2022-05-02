import { gql } from '@apollo/client';

export const QUERY_ROCKET_INFO = gql`
  query RocketInfo($id: String!) {
    ship(id: $id) {
      ship_name
      ship_model
      missions {
        name
      }
    }
  }
`;
