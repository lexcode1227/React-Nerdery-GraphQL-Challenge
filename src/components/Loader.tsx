import "./Loading.css";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-[92vh]">
      <div className="loader"></div>
      <p className="text-base font-bold text-[#828282] ml-3">Loading</p>
    </div>
  );
};

export default Loader;
