import React from 'react';
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className = "left-nav">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/Create">Create Crewmember</a>
        </li>
        <li>
          <a href="/CrewList">Crew List</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
