import React, { useState } from "react";
import { menuData } from "./MenuData";
import { Link } from "react-router-dom";
import "./NavbarStyles.css";
function Navbar() {
  const [menuClicked, setMenuClicked] = useState(false);
  return (
    <nav className="NavbarItems">
      <h1 className="logo">
        OI-Trender <i className="fa fa-line-chart"></i>
      </h1>
      <div className="menu-icons" onClick={() => setMenuClicked(!menuClicked)}>
        <i className={menuClicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={menuClicked ? "nav-menu active" : "nav-menu"}>
        {menuData.map((elem, index) => {
          return (
            <li key={index}>
              <Link to={elem.url} className={elem.cName}>
                <i className={elem.icon}></i>
                {elem.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
