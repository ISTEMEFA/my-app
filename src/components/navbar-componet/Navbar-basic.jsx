
import { Nav } from "react-bootstrap";
import React, { useState } from "react";

export default function Navbar() {

  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  const MenuItems = [
    { Title: "Home", url: "/", cName: "nav-links" },
    { Title: "About", url: "/about", cName: "nav-links" },
    { Title: "Services", url: "/services", cName: "nav-links" },
    { Title: "Contact", url: "/contact", cName: "nav-links" },
  ];

  return (
    <Nav className="NavbarItems">
      <h1 className="Navbar-logo">React</h1>
      <div className="menu-icon"></div>
      <ul>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                {item.Title}
              </a>
            </li>
          );
        })}
      </ul>
    </Nav>
  );
}