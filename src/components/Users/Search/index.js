import React from "react";

export default function Search({ search, handleChange }) {
  return (
    <div className="relative pt-2 mx-auto text-gray-600 ">
      <input
        data-testid="search_input"
        className="h-10 px-5 pr-16 text-sm font-light bg-white border-2 border-blue-500 rounded-lg sm:w-96 focus:outline-none"
        type="text"
        value={search}
        onChange={handleChange}
        placeholder="Search for User..."
      />
    </div>
  );
}
