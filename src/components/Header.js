import React from "react";
import { FaSignOutAlt } from "react-icons/fa";
import "./Header.css";

function Header() {
  return (
    <header className="top-header bg-light">
      <div className="header-content">
        <h2 className="header-title">Dashboard</h2>
        <button className="btn logout-btn">
          <FaSignOutAlt /> Logout
        </button>
      </div>
    </header>
  );
}

export default Header;
