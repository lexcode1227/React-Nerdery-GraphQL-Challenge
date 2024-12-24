import { useState } from "react";
import CharacterDetails from "../components/CharacterDetails";
import CharacterList from "../components/CharactersList";
import Navbar from "../components/Navbar";

const Characters = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(
    null
  );

  const handleSelectedCharacter = (id: string) => {
    setSelectedCharacter(id);
  };
  return (
    <main className="grid grid-cols-1 gap-4 w-full h-screen">
      <Navbar />
      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-[350px,1fr]">
        <CharacterList handleSelectedCharacter={handleSelectedCharacter} />
        {selectedCharacter && (
          <CharacterDetails selectedCharacter={selectedCharacter} />
        )}
      </section>
    </main>
  );
};

export default Characters;
