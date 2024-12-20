import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query GetCharacters {
    characters(page: 1) {
      results {
        id
        name
        species
      }
    }
  }
`;

export const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      image
      name
      species
      status
      gender
      location {
        name
      }
      origin {
        name
      }
      episode {
        name
        episode
      }
    }
  }
`;
