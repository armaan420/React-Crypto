import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Chart from "../components/Chart";
import CoinData from "../components/CoinData";
import coinGecko from "../apis/coinGecko";

const CoinDetail = () => {
  const { coin } = useParams();
  const [coinData, setCoinData] = useState({});
  const [coinVolume, setCoinVolume] = useState([]);
  const [day, setDay] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const formatData = (data) => {
    return data.map((item) => {
      return {
        t: item[0],
        y: item[1].toFixed(2),
      };
    });
  };

  useEffect(() => {
    const fetchChartData = async () => {
      setIsLoading(true);
      const [coinChart, coinInfo] = await Promise.all([
        coinGecko.get(`/coins/${coin}/market_chart/`, {
          params: {
            vs_currency: "usd",
            days: day,
          },
        }),
        coinGecko.get("/coins/markets/", {
          params: {
            vs_currency: "usd",
            ids: coin,
          },
        }),
      ]);
      console.log(coinChart);
      setCoinData(formatData(coinChart.data.prices));
      setCoinVolume(coinInfo.data[0]);
      setIsLoading(false);
    };
    fetchChartData();
  }, [day]);

  const handleDay = (value) => {
    setDay(value);
  };

  const renderData = () => {
    if (isLoading) {
      return <div className="text-light">Loading...</div>;
    }
    return (
      <div className="coinlist">
        <Chart
          day={day}
          coinData={coinData}
          handleDay={handleDay}
          coinVolume={coinVolume}
        />
        <CoinData coinVolume={coinVolume} />
      </div>
    );
  };

  return renderData();
};

export default CoinDetail;
