import React from "react";

const Search = ({ search, handleChange }) => {
  return (
    <div className="relative pt-2 mx-auto text-gray-600">
      <input
        className="h-10 px-5 pr-16 text-sm font-light bg-white border-2 border-gray-300 rounded-lg focus:outline-none"
        type="text"
        value={search}
        onChange={handleChange}
        placeholder="Search for User..."
      />
    </div>
  );
};

export default Search;
