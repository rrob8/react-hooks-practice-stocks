import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, onBuy}) {
  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map(stock=>
        <Stock key={stock.id} stock={stock} onBuy={onBuy}/>)}
    </div>
  );
}

export default StockContainer;
