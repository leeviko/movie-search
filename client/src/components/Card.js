import React from 'react'

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
