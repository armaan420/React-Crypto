import React from "react";
import { Link } from "react-router-dom";

const Coin = ({ coin }) => {
  let classes = coin.price_change_percentage_24h < 0;

  return (
    <Link to="/coinDetail">
      <li className="coinlist-item list-group-item list-group-item-action d-flex justify-content-between align-items-center text-dark">
        <img src={coin.image} className="coinlist-image" alt="" />
        <span className="text-decoration-none">${coin.current_price}</span>

        <span className={`text-${classes ? "danger" : "success"} mr-2`}>
          <i
            className={`fas fa-sort-${
              classes ? "down" : "up"
            } align-middle mr-1`}
          ></i>
          {coin.price_change_percentage_24h}
        </span>
        <i className="delete-icon fas fa-times-circle text-danger"></i>
      </li>
    </Link>
  );
};

export default Coin;
