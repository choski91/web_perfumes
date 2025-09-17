import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (input.trim()) {
      onSearch(input.trim());
      setInput(""); // limpio input
    // }
  };

  return (
    <form  onSubmit={handleSubmit}>
      <input className="search-form" 
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Buscar por nombre o marca..."
      />
      <button className="search-button" type="submit">
        Buscar
      </button>
    </form>
  );
};

export default Search;
