import { useState } from "react";

const Search = ({ searchWord }) => {
  const handleWordChange = (e) => {
    const { value } = e.target;
    searchWord(value);
  };

  return (
    <div className='search-products mt-4 '>
      <div className='input-search'>
        <input
          type='text'
          placeholder='Search for shoes'
          className='block w-[80%] md:w-[30%] mx-auto py-3 text-center border border-gray-300 rounded-lg bg-gray-50 outline-none'
          onChange={handleWordChange}
        />
      </div>
    </div>
  );
};

export default Search;
