import React from "react";
import NavLogo from "../images/React-icon.svg";

function Navbar() {
  return (
    <nav className="nav">
      <img
        src={NavLogo}
        alt=""
      />
      <h3>ReactFacts</h3>

      <h4>A simple project</h4>
    </nav>
  );
}

export default Navbar;
