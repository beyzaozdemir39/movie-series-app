import React, { useState } from 'react';
import '../styles/SearchBar.css';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value.length >= 3) {
      onSearch(value);
    } else {
      onSearch('');
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Film / Dizi / Oyuncu ara"
        value={query}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;
