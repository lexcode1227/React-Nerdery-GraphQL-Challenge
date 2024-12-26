import { CharacterDetails } from "../utils/types";

const CharacterDetailsCard = ({
  character,
}: {
  character: CharacterDetails;
}) => {
  return (
    <article className="flex flex-col gap-8 items-start text-base w-full text-black p-4 lg:p-0">
      <div className="w-full flex flex-col lg:flex-row gap-4 items-start lg:gap-10">
        <div className="w-full">
          <h3 className="pb-2 font-bold text-[#333333]">General Information</h3>
          <table className="w-full">
            <tbody>
              <tr className="border-b-2 border-[#828282]/10">
                <td className="pb-2 font-bold text-[#828282]">Name:</td>
                <td className="pb-2 text-right font-bold">{character?.name}</td>
              </tr>
              <tr className="border-b-2 border-[#828282]/10">
                <td className="pb-2 font-bold text-[#828282]">Status:</td>
                <td className="pb-2 text-right font-bold">
                  {character?.status}
                </td>
              </tr>
              <tr className="border-b-2 border-[#828282]/10">
                <td className="pb-2 font-bold text-[#828282]">Species:</td>
                <td className="pb-2 text-right font-bold">
                  {character?.species}
                </td>
              </tr>
              <tr className="border-b-2 border-[#828282]/10">
                <td className="pb-2 font-bold text-[#828282]">Gender:</td>
                <td className="pb-2 text-right font-bold">
                  {character?.gender}
                </td>
              </tr>
              <tr className="border-b-2 border-[#828282]/10">
                <td className="pb-2 font-bold text-[#828282]">Location:</td>
                <td className="pb-2 text-right font-bold">
                  {character?.location.name}
                </td>
              </tr>
              <tr className="border-b-2 border-[#828282]/10">
                <td className="pb-2 font-bold text-[#828282]">Origin:</td>
                <td className="pb-2 text-right font-bold">
                  {character?.origin.name}
                </td>
              </tr>
              <tr className="border-b-2 border-[#828282]/10">
                <td className="pb-2 font-bold text-[#828282]">Episodes:</td>
                <td className="pb-2 text-right font-bold">
                  {character?.episode.length}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-full">
          <h3 className="pb-2 font-bold text-[#333333]">
            Episodes Information
          </h3>
          <table className="w-full">
            <tbody>
              {character?.episode.slice(0, 5).map((episode) => (
                <tr
                  className="border-b-2 border-[#828282]/10"
                  key={episode.episode}
                >
                  <td className="pb-2 font-bold text-[#828282]">
                    {episode.name}
                  </td>
                  <td className="pb-2 text-right font-bold">
                    {episode.episode}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <img
        src={character?.image}
        alt={character?.name}
        className="size-40 rounded-3xl"
      />
    </article>
  );
};

export default CharacterDetailsCard;
