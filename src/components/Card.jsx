import React from "react";
import classNames from "classnames";
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
  const classes = classNames({ featured }, "Card");
  return (
    <div className={classes}>
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
          <li>{postedAt}</li>
          <li>{contract}</li>
          <li>{location}</li>
        </div>
      </div>

      <div className="Card-footer">
        {languages.map((lang, i) => (
          <li key={i}>{lang}</li>
        ))}
      </div>
    </div>
  );
};

export default Card;
