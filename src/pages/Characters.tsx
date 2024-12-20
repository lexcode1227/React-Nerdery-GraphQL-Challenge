import { useState } from "react";
import CharacterDetails from "../components/CharacterDetails";
import CharacterList from "../components/CharactersList";
import Navbar from "../components/Navbar";

const Characters = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<string>("1");

  const handleSelectedCharacter = (id: string) => {
    setSelectedCharacter(id);
  };
  return (
    <main className=" w-lvw grid grid-cols-1 gap-4">
      <Navbar />
      <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <CharacterList handleSelectedCharacter={handleSelectedCharacter} />
        <CharacterDetails selectedCharacter={selectedCharacter} />
      </section>
    </main>
  );
};

export default Characters;
