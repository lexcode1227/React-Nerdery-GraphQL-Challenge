import { Character } from "../utils/types.ts";

const CharacterCard = ({
  character,
  handleSelectedCharacter,
}: {
  character: Character;
  handleSelectedCharacter: (id: string) => void;
}) => {
  return (
    <article
      className="border border-solid border-gray-600 text-black p-4 flex justify-between items-center cursor-pointer"
      onClick={() => handleSelectedCharacter(character.id)}
    >
      <div>
        <h2 className="text-base text-[#333333] font-bold">
          {character?.name}
        </h2>
        <p className="text-[#828282]">{character?.species}</p>
      </div>
      <svg
        className="w-6 h-6 text-[#333333]"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m9 5 7 7-7 7"
        />
      </svg>
    </article>
  );
};

export default CharacterCard;
