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
    addTerm,
  } = props;
  const classes = classNames({ featured }, "Card");

  const tablets = [role, level, ...languages, ...tools];

  return (
    <div className={classes}>
      <div className="Card-header">
        <img src={logo} alt="Logo" />
      </div>
      <div className="Card-body">
        <div className="heading">
          <span className="company">{company} </span>
          <div className="labels">
            {props.new ? <span className="label new">new! </span> : null}
            {featured ? <span className="label">featured </span> : null}
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
        {tablets.map((t, i) => (
          <li onClick={() => addTerm(t)} key={i}>
            {t}
          </li>
        ))}
      </div>
    </div>
  );
};

export default Card;
