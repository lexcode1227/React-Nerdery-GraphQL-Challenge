import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "../graphql/Characters";
import CharacterCard from "./CharacterCard";
import { CharacterListProps, CharactersData } from "../utils/types";
import { useEffect } from "react";
import Loading from "./Loading";

const CharactersList: React.FC<CharacterListProps> = ({
  handleSelectedCharacter,
}) => {
  const { loading, data, fetchMore } = useQuery<CharactersData>(
    GET_CHARACTERS,
    {
      variables: {
        page: 1,
      },
      notifyOnNetworkStatusChange: true,
    }
  );

  const characters = data?.characters?.results || [];
  const nextPage = data?.characters?.info?.next;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      loading
    )
      return;
    if (nextPage) {
      fetchMore({
        variables: { page: nextPage },
        updateQuery: (prevResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prevResult;
          return {
            characters: {
              ...fetchMoreResult.characters,
              results: [
                ...prevResult.characters.results,
                ...fetchMoreResult.characters.results,
              ],
            },
          };
        },
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll, loading, nextPage]);

  return (
    <div className="h-screen overflow-y-auto">
      {characters.map((character) => (
        <CharacterCard
          key={character.id}
          character={character}
          handleSelectedCharacter={handleSelectedCharacter}
        />
      ))}
      {loading && <Loading />}
    </div>
  );
};

export default CharactersList;
