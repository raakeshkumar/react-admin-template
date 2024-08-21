import React from "react";
import { Dropdown } from "react-bootstrap";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar bg-light">
      <div className="navbar-content">
        <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown-basic">
            User
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/profile">Profile</Dropdown.Item>
            <Dropdown.Item href="#/logout">Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </nav>
  );
}

export default Navbar;
