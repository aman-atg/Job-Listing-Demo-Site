import React from "react";

// use media.match or/and lazy loading..
import { ReactComponent as HeaderBgDesktop } from "../assets/images/bg-header-desktop.svg";
import { ReactComponent as HeaderBgMobile } from "../assets/images/bg-header-mobile.svg";
import CardList from "../components/CardList";

const Home = () => {
  return (
    <div className="Home">
      <div className="header">
        <HeaderBgDesktop />
      </div>
      <div className="body">
        <CardList />
      </div>
    </div>
  );
};

export default Home;
