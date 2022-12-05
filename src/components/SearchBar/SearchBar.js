import React from "react";
import Classes from "./SearchBar.module.css";

function SearchBar({ value, handleSearchKey, clearSearch,formSubmit    }) {
  return (
    <div className={Classes.searchBar}>
      <form onSubmit={formSubmit} >
        <input
          type="text"
          onChange={handleSearchKey}
          placeholder="search by tittle"
          value={value}
          
        />
        {value && <span onClick={clearSearch} >x</span>}
        <button>Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
