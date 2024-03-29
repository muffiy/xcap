import { gql } from 'graphql-request';

export const GetPoolTokenData = gql`
  query GetPoolTokenData($address: Bytes!) {
    pools(where: { address: $address }) {
      id
      totalShares
      tokens {
        id
        symbol
        balance
        token {
          id
          symbol
          latestUSDPrice
        }
      }
    }
  }
`;
