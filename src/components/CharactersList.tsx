// import React from 'react'

import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "../graphql/Characters";
import { CharactersData } from "../utils/Types";
import CharacterCard from "./CharacterCard";

const CharactersList = () => {
  const { loading, error, data } = useQuery<CharactersData>(GET_CHARACTERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error {error.message}</p>;

  return (
    <div>
      {data &&
        data?.characters.results.map((character) => (
          <div>
            <CharacterCard key={character.id} character={character} />
          </div>
        ))}
    </div>
  );
};

export default CharactersList;
