import React from "react";
import Coins from "../components/Coins";
import AddCoin from "../components/AddCoin";

const CoinList = () => {
  return (
    <div className="coinsummary shadow border p-2 rounded mt-2 bg-light">
      <AddCoin />
      <Coins />
    </div>
  );
};

export default CoinList;
