import React from 'react'

const Search = () => {
  return (
    <form method="POST" className="search-form">
      <input type="text" name="search-value" className="search-field" />         
      <button type="submit" className="search-btn">Hae</button>
    </form>
  )
}

export default Search
