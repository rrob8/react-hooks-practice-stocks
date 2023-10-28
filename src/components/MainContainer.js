import React, {useEffect, useState} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [stocks, setStocks] = useState([])
  const [purchased, setPurchased ] = useState([])

  useEffect(()=>{
    fetch(` http://localhost:3001/stocks`)
    .then(r=> r.json())
    .then(data=> setStocks(data))

  },[])

  function buyStock (stock) {
setPurchased([...purchased, stock])
  }

  function sellStock (soldStock) {
    const newCollection = [...purchased].filter(stock=> stock !== soldStock)
    setPurchased(newCollection)
  }

  function sort (value) {
    if (value === 'Alphabetically') {
      const newCollection = [...stocks].sort((a, b) => (a.name > b.name) ? 1 : -1)
      setStocks(newCollection)
    }
    if (value === 'Price') {
      const newCollection = [...stocks].sort((a, b) => (a.price > b.price) ? 1 : -1)
      setStocks(newCollection)
    }

  }

  function filter (value) {
    fetch(` http://localhost:3001/stocks`)
    .then(r=> r.json())
    .then(data=> {

    const newCollection = data.filter(stock=> stock.type === value)
    setStocks(newCollection)
    
    })
   
  }



  useEffect (()=> {

  },[purchased])
  



  return (
    <div>
      <SearchBar onSort={sort} onFilter={filter}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} onBuy={buyStock} />
        </div>
        <div className="col-4">
          <PortfolioContainer purchased={purchased} onSell={sellStock}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
