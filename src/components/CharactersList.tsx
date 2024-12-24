import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "../graphql/Characters";
import CharacterCard from "./CharacterCard";
import { CharacterListProps, CharactersData } from "../utils/types";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

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

  const fetchMoreCharacters = () => {
    if (nextPage) {
      fetchMore({
        variables: {
          page: nextPage,
        },
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

  if (loading && !characters.length) return <Loading />;
  return (
    <div
      className="h-[80vh] overflow-y-auto order-2 md:order-none max-w-[350px]"
      id="charactersContainer"
    >
      <InfiniteScroll
        dataLength={characters.length}
        next={fetchMoreCharacters}
        hasMore={!!nextPage}
        loader={<Loading />}
        scrollableTarget="charactersContainer"
      >
        {characters.map((character) => (
          <CharacterCard
            key={character.id}
            character={character}
            handleSelectedCharacter={handleSelectedCharacter}
          />
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default CharactersList;
