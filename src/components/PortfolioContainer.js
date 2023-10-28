import React from "react";
import Stock from "./Stock";
import MyStock from './MyStock'

function PortfolioContainer({purchased, onSell}) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {
       purchased.map(stock=>
        <MyStock key={stock.id} stock={stock} onSell={onSell} />)
      }
    </div>
  );
}

export default PortfolioContainer;
