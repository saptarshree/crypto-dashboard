import React, { useState } from "react";
import axios from "axios";

const Searchbar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleChange = async () => {
    try {
      const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets`, {
        params: {
          vs_currency: "usd",
          ids: query
        }
      });
      setResults(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-9/12 mr-2 pb-3 pt-3 pl-5 py-5 relative left-24">
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 bottom-0 w-4 h-4 my-auto text-gray-400 left-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={handleInputChange}
          className="w-full h-11 py-1 pl-10 pr-8 border rounded-md outline-none focus:border-black shadow-md"
        />
        <button onClick={handleChange} className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-1 bg-blue-500 text-white rounded">
          Search
        </button>
      </div>
      {results.length > 0 && (
        <div className="mt-4">
          <div key={results[0].id} className="flex items-center">
            <img src={results[0].image} alt={results[0].name} className="w-8 h-8 mr-2" />
            <div>{results[0].name}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Searchbar;


