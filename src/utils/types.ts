export type Character = {
  id: string;
  name: string;
  species: string;
};

export type CharactersData = {
  characters: {
    results: Character[];
  };
};
