import React from "react";
import { Link } from "react-router-dom";

function Logo({ logo }) {
  return (
    <div className="logo">
      <Link to="/">
        <img src={logo} alt="DESIGNO" />
      </Link>
    </div>
  );
}

export default Logo;
