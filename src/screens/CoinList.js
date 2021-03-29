import React from "react";
import Coins from "../components/Coins";
import AddCoin from "../components/AddCoin";

const CoinList = () => {
  return (
    <div>
      <AddCoin />
      <Coins />
    </div>
  );
};

export default CoinList;
