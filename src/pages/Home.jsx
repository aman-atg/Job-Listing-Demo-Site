import React, { useState } from "react";

import SearchBar from "../components/SearchBar";
import CardsList from "../components/CardsList";

const Home = () => {
  const [terms, setTerms] = useState([]);

  const addTerm = term => {
    setTerms([...new Set([...terms, term])]);
  };

  const clear = term => {
    if (term === "") setTerms([]);
    else setTerms(terms.filter(t => t !== term));
  };

  return (
    <div className="Home">
      <div className="header">
        <button className="github">
          <a href="https://github.com/aman-atg/Job-Listing-Demo-Site">Github</a>
        </button>
      </div>
      <div className="body">
        <SearchBar terms={terms} clear={clear} />
        <CardsList terms={terms} addTerm={addTerm} />
      </div>
    </div>
  );
};

export default Home;
