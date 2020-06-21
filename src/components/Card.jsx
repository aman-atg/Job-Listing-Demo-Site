import React from "react";

const Card = props => {
  const { company, contract, featured, id, languages } = props;

  return <div className="Card">{company}</div>;
};

export default Card;
