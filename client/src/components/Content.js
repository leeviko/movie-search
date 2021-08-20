import React from 'react';
import { useSelector } from 'react-redux';

import Card from "./Card";

const Content = () => {
  const items = useSelector((state) => state.item.items)
  console.log(items);
  return (
    <div className="content">
      <div className="content-container">
        <Card />
        <Card />
        <Card />
        <Card />

      </div>
    </div>
  )
}

export default Content
