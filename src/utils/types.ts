export type Character = {
  id: string;
  name: string;
  species: string;
};

export type CharactersData = {
  characters: {
    results: Character[];
    info: {
      next: string;
    };
  };
};

export type Episode = {
  name: string;
  episode: string;
};

export type CharacterDetails = {
  data: {
    id: string;
    image: string;
    name: string;
    species: string;
    status: string;
    gender: string;
    location: {
      name: string;
    };
    origin: {
      name: string;
    };
    episode: {
      name: string;
      episode: string;
    }[];
  };
};

export type CharacterListProps = {
  handleSelectedCharacter: (id: string) => void;
};

export type CharacterDetailsProps = {
  selectedCharacter: string;
};

export type CharacterState = {
  characters: CharacterDetails[];
  currentPage: number;
  loading: boolean;
  hasMore: boolean;
};
