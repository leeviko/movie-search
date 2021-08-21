import React, { useState } from 'react';
import { getItems } from "../actions/itemActions";
import { useDispatch } from "react-redux";

const Search = () => {
  const dispatch = useDispatch();
  const [searchVal, setSearchVal] = useState(""); 
  const [selectVal, setSelectVal] = useState("kaikki")

  const handleChange = (e) => {
    setSelectVal(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getItems(searchVal))
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} method="POST" className="search-form">
      {/* <select  defaultValue={selectVal} onChange={(e) => handleChange(e)} className="dropdown" name="search-type" id="search-type">
        <option value="kaikki">Kaikki</option>
        <option value="elokuvat">Elokuvat</option>
        <option value="sarjat">TV-sarjat</option>
      </select> */}
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
