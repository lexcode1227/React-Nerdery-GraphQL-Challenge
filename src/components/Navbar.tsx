const Navbar = () => {
  return (
    <nav className="bg-[#121212] text-[#f2f2f2] w-full py-4 px-8">
      <h1 className="text-base font-bold">Rick and Morty</h1>
      <div className="hidden">
        <a href="/">Home</a>
        <a href="/about">About</a>
      </div>
    </nav>
  );
};

export default Navbar;
