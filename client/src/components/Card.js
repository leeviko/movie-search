import React from 'react'

import Poster from "../images/startrek.jpg"

const Card = ({ name, img }) => {
  return (
    <div className="card">
      <div className="card-body">
        <img className="card-img" alt="" src={img} />
        <div className="card-name">{name}</div>

      </div>
    </div>
  )
}

export default Card
