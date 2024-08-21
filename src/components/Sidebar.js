import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChartLine, faTable, faChartPie, faFolder, faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleSidebarVisibility = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <>
      <button className={`toggle-visibility-btn ${isSidebarVisible ? "" : "text-primary"}`} onClick={toggleSidebarVisibility}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div className={`sidebar ${isCollapsed ? "collapsed" : ""} ${isSidebarVisible ? "" : "hidden"}`}>
        <div className="sidebar-header">
          <h2>{!isCollapsed && "Admin"}</h2>
          <button className="toggle-btn" onClick={toggleSidebar}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        <nav className="nav flex-column">
          <Link to="/" className="nav-link">
            <FontAwesomeIcon icon={faChartLine} />
            {!isCollapsed && <span>Dashboard</span>}
          </Link>

          <div className="nav-item">
            <div className="nav-link" onClick={toggleDropdown}>
              <FontAwesomeIcon icon={faFolder} />
              {!isCollapsed && <span>Menu Items</span>}
              {!isCollapsed && <FontAwesomeIcon icon={isDropdownOpen ? faChevronUp : faChevronDown} className="dropdown-arrow" />}
            </div>
            {isDropdownOpen && !isCollapsed && (
              <div className="dropdown-items">
                <Link to="/option1" className="dropdown-item">
                  Option 1
                </Link>
                <Link to="/option2" className="dropdown-item">
                  Option 2
                </Link>
              </div>
            )}
          </div>

          <Link to="/charts" className="nav-link">
            <FontAwesomeIcon icon={faChartPie} />
            {!isCollapsed && <span>Charts</span>}
          </Link>
          <Link to="/tables" className="nav-link">
            <FontAwesomeIcon icon={faTable} />
            {!isCollapsed && <span>Tables</span>}
          </Link>
        </nav>
      </div>
    </>
  );
}

export default Sidebar;
