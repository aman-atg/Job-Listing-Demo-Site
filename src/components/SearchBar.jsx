import React from "react";

const SearchBar = ({ terms, clear }) => {
  return (
    <div className="SearchBar">
      <div className="terms">
        {terms.map((term, i) => (
          <p key={i}>
            {term} <span onClick={() => clear(term)}>X</span>
          </p>
        ))}
      </div>
      <button onClick={() => clear("")}>clear</button>
    </div>
  );
};

export default SearchBar;
