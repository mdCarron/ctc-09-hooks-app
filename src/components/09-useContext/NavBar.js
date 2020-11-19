import React from "react";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <Link to="./" className="navbar-brand">
        useContext
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <NavLink
              to="./"
              className="nav-link"
              exact
              activeClassName="active"
            >
              Home <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="./login" className="nav-link" activeClassName="active">
              LogIn
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="./about" className="nav-link" activeClassName="active">
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
