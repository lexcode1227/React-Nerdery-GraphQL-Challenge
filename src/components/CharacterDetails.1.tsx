import { useQuery } from "@apollo/client";
import { GET_CHARACTER } from "../graphql/Characters";
import { CharacterData } from "../utils/types";

export const CharacterDetails = () => {
  const params = { id: "1" };
  const { data, loading, error } = useQuery<CharacterData>(GET_CHARACTER, {
    variables: {
      id: params.id,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error {error.message}</p>;

  return (
    <article className="flex flex-col items-center gap-4 p-8">
      <h2 className="font-bold text-base text-[#333333]">Character Details</h2>
      <div className=" w-full border rounded-md border-solid border-gray-600 text-black p-4">
        <p>Name: {data?.character.name}</p>
        <img
          src={data?.character.image}
          alt={data?.character.name}
          className="size-40 rounded-full"
        />
        <p>Status: {data?.character.status}</p>
        <p>Species: {data?.character.species}</p>
        <p>Gender: {data?.character.gender}</p>
        <p>Location: {data?.character.location.name}</p>
        <p>Origin: {data?.character.origin.name}</p>
        <p>Episodes: {data?.character.episode.length}</p>
        {data?.character.episode.slice(0, 5).map((episode) => (
          <div key={episode.episode}>
            <p key={episode.episode}>{episode.name}</p>
            <p key={episode.name}>{episode.episode}</p>
          </div>
        ))}
      </div>
    </article>
  );
};
