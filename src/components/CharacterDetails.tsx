import { useQuery } from "@apollo/client";
import { GET_CHARACTER } from "../graphql/Characters";
import CharacterDetailsCard from "./CharacterDetailsCard";
import { CharacterDetailsProps } from "../utils/types";
import Loading from "./Loader";

const CharacterDetails: React.FC<CharacterDetailsProps> = ({
  selectedCharacter,
}) => {
  const { data, loading, error } = useQuery(GET_CHARACTER, {
    variables: {
      id: selectedCharacter,
    },
  });

  if (loading) return <Loading />;
  if (error) return <p>Error {error.message}</p>;

  return (
    <article className="flex flex-col items-center gap-4 p-8 h-auto min-h-max">
      <h2 className="w-full font-bold text-left text-base text-[#333333]">
        Character Details
      </h2>
      <CharacterDetailsCard key={data?.id} character={data.character} />
    </article>
  );
};

export default CharacterDetails;
