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
              backgroundColor: "rgba(125, 184, 15, 0.6)",
              borderColor: "rgba(203, 342, 45, 0.4)",
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
          <p className="my-0">${coinVolume.current_price} USD</p>
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
    <div className="bg-white border mt-2 rounded p-3">
      {renderPrice()}
      <div>
        <canvas ref={chartRef} id="chart" width={250} height={250}></canvas>
        <div>
          <button onClick={() => handleDay(1)} className="days-btn">
            24h
          </button>
          <button onClick={() => handleDay(10)} className="days-btn">
            10d
          </button>
          <button onClick={() => handleDay(365)} className="days-btn">
            1y
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chart;
