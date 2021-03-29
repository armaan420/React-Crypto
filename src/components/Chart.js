import React, { useEffect, useRef } from "react";
import Chartjs from "chart.js";
import { chartHistory } from "../chartConfigs/chartConfigs";
import { useParams } from "react-router";

const Chart = ({ coinData, coinVolume, handleDay }) => {
  const chartRef = useRef();
  const { coin } = useParams();

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const chartInstance = new Chartjs(chartRef.current, {
        type: "line",
        data: {
          datasets: [
            {
              label: `${coin} price`,
              data: coinData,
              backgroundColor: "#00cccc",
              borderColor: "rgba(203, 34, 45, 0.4)",
              pointRadius: 1.5,
              borderWidth: 1,
            },
          ],
        },
        options: chartHistory,
      });
    }
  }, []);

  const renderPrice = () => {
    if (coinVolume) {
      return (
        <>
          <p className="white my-0">${coinVolume.current_price} USD</p>
          <p
            className={
              coinVolume.price_change_24h < 0
                ? "text-danger my-0"
                : "text-success my-0"
            }
          >
            <i
              className={`fas fa-sort-${
                coinVolume.price_change_24h < 0 ? "down" : "up"
              } align-middle mr-1`}
            ></i>
            ${coinVolume.price_change_24h}%
          </p>
        </>
      );
    }
  };

  return (
    <div className="bg border mt-2 rounded p-3">
      {renderPrice()}
      <div>
        <canvas ref={chartRef} id="chart" width={1000} height={400}></canvas>
        <div className="btn-container">
          <button onClick={() => handleDay(1)} className="days-btn">
            24 hours
          </button>
          <button onClick={() => handleDay(7)} className="days-btn">
            1 week
          </button>
          <button onClick={() => handleDay(30)} className="days-btn">
            1 month
          </button>
          <button onClick={() => handleDay(365)} className="days-btn">
            1 year
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chart;
