import React from 'react'

import Poster from "../images/startrek.jpg"

const Card = () => {
  return (
    <div className="card">
      <div className="card-body">
        <img className="card-img" alt="" src={Poster} />
        <div className="card-name">Star trek</div>
        <div className="card-actions">
          <button className="card-actions-save">Save</button>
          <span>Lue lisää</span>
        </div>
      </div>
    </div>
  )
}

export default Card
