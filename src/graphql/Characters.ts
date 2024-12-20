import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query GetCharacters($page: Int!) {
    characters(page: $page) {
      results {
        id
        name
        species
      }
      info {
        next
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
