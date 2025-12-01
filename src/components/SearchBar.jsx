import React, { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [term, setTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(term);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 flex max-w-md mx-auto">
      <input
        type="text"
        placeholder="Search by title or tag..."
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        className="flex-grow rounded-l-full border-2 border-orange-400 px-4 py-2 focus:outline-none"
      />
      <button
        type="submit"
        className="bg-orange-500 text-white rounded-r-full px-6 hover:bg-orange-600"
      >
        Search
      </button>
    </form>
  );
}
