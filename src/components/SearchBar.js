import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [inputSearch, setInputSearch] = useState("");
  const navigate = useNavigate();

  return (
    <div className="w-10/12 border-2 border-gray-200 bg-zinc-950/50 rounded-md mx-auto">
      <input
        onChange={(e) => {
          setInputSearch(e.target.value);
        }}
        value={inputSearch}
        name="anime"
        className="w-full p-2 bg-zinc-900/50 border-b-2 border-b-gray-200 focus:bg-gray-200 text-zinc-900"
        placeholder="Find anime..."
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          navigate(`/search/${inputSearch}`);
          setInputSearch("");
        }}
        disabled={!inputSearch}
        className="w-full p-2 hover:bg-gray-50/10 text-gray-200"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
