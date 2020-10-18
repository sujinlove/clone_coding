import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.scss";

function Navigation() {
  return (
    <div className="nav-wrapper">
      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
}

export default Navigation;
