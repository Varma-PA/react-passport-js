import React from "react";
import "../";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Achyuth App</span>
      <ul className="list">
        <li className="listItem">
          <img src="" alt="" className="avatar" />
        </li>
        <li className="listItem">John Doe</li>
        <li className="listItem">Logout</li>
      </ul>
    </div>
  );
};

export default Navbar;
