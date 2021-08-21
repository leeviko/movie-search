import React from 'react';
import { useSelector } from 'react-redux';

import Card from "./Card";

const Content = () => {
  const items = useSelector((state) => state.item.items)

  

  console.log(items);
  return (
    <div className="content">
      <div className="content-container">
        {items.map((item, i) => (
          <Card key={i} img={item.image} name={item.title} />
        ))}

      </div>
    </div>
  )
}

export default Content
