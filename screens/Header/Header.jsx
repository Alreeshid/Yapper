import React from "react";
import { HeaderAuth } from "../../components/HeaderAuth";
import { NavigationPill } from "../../components/NavigationPill";
import "./style.css";

export const Header = () => {
  return (
    <div className="header">
      <img className="block" alt="Block" src="/img/figma.svg" />
      <div className="navigation-pill-list">
        <NavigationPill className="navigation-pill-instance" label="Community" state="default" />
        <NavigationPill className="navigation-pill-instance" label="Contact" state="default" />
      </div>
      <HeaderAuth state="logged-out" />
    </div>
  );
};
