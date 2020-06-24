import React from "react";
import classNames from "classnames";

import { ReactComponent as XIcon } from "../assets/x.svg";

const SearchBar = ({ terms, clear }) => {
  const classes = classNames("SearchBar", { active: !!terms.length });
  return (
    <div className={classes}>
      <div className="terms">
        {terms.map((term, i) => (
          <p key={i}>
            {term}
            <span
              role="img"
              aria-label="remove search term"
              onClick={() => clear(term)}
            >
              <XIcon />
            </span>
          </p>
        ))}
      </div>
      <button className="clear" onClick={() => clear("")}>
        clear
      </button>
    </div>
  );
};

export default SearchBar;
