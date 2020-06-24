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
    if (term === "") setTerms([]);
    else setTerms(terms.filter(t => t !== term));
  };

  const Cards = Data.map(card => {
    if (terms.length === 0) {
      return <Card addTerm={term => addTerm(term)} key={card.id} {...card} />;
    }
    let flg = 1;
    const { role, level, languages, tools } = card;
    const allTerms = [role, level, ...languages, ...tools];

    terms.forEach(t => {
      if (allTerms.filter(term => t === term).length === 0) flg = 0;
    });

    return flg ? (
      <Card addTerm={term => addTerm(term)} key={card.id} {...card} />
    ) : null;
  });
  return (
    <div className="Home">
      <div className="header"></div>
      <div className="body">
        <SearchBar terms={terms} clear={clear} />
        <div className="CardList">{Cards}</div>
      </div>
    </div>
  );
};

export default Home;
