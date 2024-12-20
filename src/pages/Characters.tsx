import CharacterDetails from "../components/CharacterDetails";
import CharacterList from "../components/CharactersList";
import Navbar from "../components/Navbar";

const Characters = () => {
  return (
    <main className=" w-lvw grid grid-cols-1 gap-4">
      <Navbar />
      <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <CharacterList />
        <CharacterDetails />
      </section>
    </main>
  );
};

export default Characters;
