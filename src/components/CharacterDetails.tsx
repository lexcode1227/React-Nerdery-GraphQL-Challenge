import { useQuery } from "@apollo/client";
import { GET_CHARACTER } from "../graphql/Characters";
import CharacterDetailsCard from "./CharacterDetailsCard";

const CharacterDetails = () => {
  const params = { id: "1" };
  const { data, loading, error } = useQuery(GET_CHARACTER, {
    variables: {
      id: params.id,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error {error.message}</p>;

  return (
    <article className="flex flex-col items-center gap-4 p-8">
      <h2 className="font-bold text-base text-[#333333]">Character Details</h2>
      <CharacterDetailsCard key={data?.id} character={data.character} />
    </article>
  );
};

export default CharacterDetails;
