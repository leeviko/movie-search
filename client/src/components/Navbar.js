import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from "../actions/authActions";
import {
  Link
} from "react-router-dom";


import Search from "./Search";

const Navbar = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <div className="navbar">
      <div className="nav-content">
        <h3 className="brand">Movie-Search</h3>
        <Search />
        <div className="nav-items">
          { isAuthenticated ? <Link onClick={() =>dispatch(logout())} to="/">Kirjaudu Ulos</Link> : <Link to="/kirjaudu-sisaan">Kirjaudu Sisään</Link>}
          
        </div>
      </div>
    </div>
  )
}

export default Navbar
