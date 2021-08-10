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
      <input 
        type="text" 
        name="search-value" 
        value={searchVal} 
        onChange={(e) => setSearchVal(e.target.value)} 
        className="search-field" 
      />         
      <button type="submit" className="search-btn">Hae</button>
    </form>
  )
}

export default Search
