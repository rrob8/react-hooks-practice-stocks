import React from "react";

function MyStock({stock, onSell}) {
  
  function handleClick() {
    onSell(stock)
  }
  return (
    <div>
      <div 
      onClick={handleClick}
      className="card">
        <div className="card-body">
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{stock.price}</p>
        </div>
      </div>
    </div>
  );
}
export default MyStock;
