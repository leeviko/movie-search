import React, { useState } from 'react';
import { getItems } from "../actions/itemActions";
import { useDispatch } from "react-redux";

const Search = () => {
  const dispatch = useDispatch();
  const [searchVal, setSearchVal] = useState(""); 
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getItems(searchVal))
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} method="POST" className="search-form">
      <select className="dropdown" name="search-type" id="search-type">
        <option value="opel">Kaikki</option>
        <option value="movies">Elokuvat</option>
        <option value="saab">TV-sarjat</option>
      </select>
      <input 
        type="text" 
        name="search-value" 
        value={searchVal} 
        onChange={(e) => setSearchVal(e.target.value)} 
        className="search-field" 
        placeholder="esim. Inception"
      />         
      <button type="submit" className="search-btn">Hae</button>
    </form>
  )
}

export default Search
