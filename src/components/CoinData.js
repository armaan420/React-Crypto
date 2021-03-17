import React from "react";

const CoinData = ({ coinVolume }) => {
  const renderData = () => {
    if (coinVolume) {
      return (
        <div className="bg-white mt-3 p-2 rounded border row">
          <div className="col-sm">
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category">Market Cap</span>
              <span>{coinVolume.market_cap}</span>
            </div>
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category">
                Total Supply
              </span>
              <span>{coinVolume.total_supply}</span>
            </div>
          </div>

          <div className="col-sm">
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category">Volume</span>
              <span>{coinVolume.total_volume}</span>
            </div>
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category">High 24h</span>
              <span>{coinVolume.high_24h}</span>
            </div>
          </div>

          <div className="col-sm">
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category">
                Circulating Supply
              </span>
              <span>{coinVolume.circulating_supply}</span>
            </div>
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category">Low 24h</span>
              <span>{coinVolume.low_24h}</span>
            </div>
          </div>
        </div>
      );
    }
  };

  return <div>{renderData()}</div>;
};

export default CoinData;
