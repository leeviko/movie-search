import React from 'react'
import {
  Link
} from "react-router-dom";


import Search from "./Search";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-content">
        <h3 className="brand">Movie-Search</h3>
        <Search />
        <div className="nav-items">
          <Link to="/kirjaudu">Kirjaudu Sisään</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
