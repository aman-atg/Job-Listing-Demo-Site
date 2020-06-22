import React from "react";

const Card = props => {
  const {
    company,
    logo,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  } = props;

  return (
    <div className="Card">
      <div className="Card-header">
        <img src={logo} alt="Logo" />
      </div>
      <div className="Card-body">
        <div className="heading">
          <span className="company">{company} </span>
          <div className="labels">
            New<span>{featured}</span>
          </div>
        </div>
        <h1>{position}</h1>
        <div className="footer">
          {postedAt} {contract} {location}
        </div>
      </div>

      <div className="Card-footer">{languages}</div>
    </div>
  );
};

export default Card;
