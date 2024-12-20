import { CharacterDetails } from "../utils/types";

const CharacterDetailsCard = ({
  character,
}: {
  character: CharacterDetails;
}) => {
  return (
    <div className="flex flex-col items-start  w-full border rounded-md border-solid border-gray-600 text-black p-4">
      <p>Name: {character?.name}</p>
      <img
        src={character?.image}
        alt={character?.name}
        className="size-40 rounded-full"
      />
      <p>Status: {character?.status}</p>
      <p>Species: {character?.species}</p>
      <p>Gender: {character?.gender}</p>
      <p>Location: {character?.location.name}</p>
      <p>Origin: {character?.origin.name}</p>
      <p>Episodes: {character?.episode.length}</p>
      {character?.episode.slice(0, 5).map((episode) => (
        <div key={episode.episode}>
          <p key={episode.episode}>{episode.name}</p>
          <p key={episode.name}>{episode.episode}</p>
        </div>
      ))}
    </div>
  );
};

export default CharacterDetailsCard;
