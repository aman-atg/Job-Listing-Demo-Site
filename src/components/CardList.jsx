import React from "react";

import Data from "../assets/data.json";
import Card from "./Card";

const CardList = () => {
  console.log(Data);
  const Cards = Data.map(card => <Card key={card.id} {...card} />);
  return <div className="CardList"> {Cards} </div>;
};

export default CardList;
