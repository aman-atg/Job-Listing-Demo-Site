import React, { useState } from "react";

import Card from "../components/Card";
import SearchBar from "../components/SearchBar";

import Data from "../assets/data.json";

const Home = () => {
  const [terms, setTerms] = useState([]);

  const addTerm = term => {
    //unique terms only
    setTerms([...new Set([...terms, term])]);
  };
  const clear = term => {
    console.log(term);

    if (term === "") setTerms([]);
    else setTerms(terms.filter(t => t !== term));
  };

  const Cards = Data.map(card => (
    <Card addTerm={term => addTerm(term)} key={card.id} {...card} />
  ));
  return (
    <div className="Home">
      <div className="header"></div>
      <SearchBar terms={terms} clear={clear} />
      <div className="body">
        <div className="CardList">{Cards}</div>
      </div>
    </div>
  );
};

export default Home;
