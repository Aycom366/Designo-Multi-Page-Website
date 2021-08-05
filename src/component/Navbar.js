import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import Logo from "./Logo";
import logo from "../images/Shared/logo-dark.png";

function NavBar({ logoLight }) {
  const { openNavLinks, setOpenNavLinks } = useGlobalContext();

  return (
    <nav className={`${logoLight ? "navBlack" : "nav"}`}>
      <div className="nav-center">
        <div className="nav-logo">
          <Logo logo={logoLight ? logoLight : logo} />
          <div
            onClick={() => setOpenNavLinks(!openNavLinks)}
            className={`${openNavLinks ? "bars is-active" : "bars"}`}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div
          className={`${
            openNavLinks ? "nav-links show-navLinks" : "nav-links"
          }`}
        >
          <Link to="/about" onClick={() => setOpenNavLinks(false)}>
            our company
          </Link>
          <Link to="/location" onClick={() => setOpenNavLinks(false)}>
            Locations
          </Link>
          <Link to="/contact" onClick={() => setOpenNavLinks(false)}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
