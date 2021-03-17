import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Chart from "../components/Chart";
import CoinData from "../components/CoinData";
import coinGecko from "../apis/coinGecko";

const CoinDetail = () => {
  const { coin } = useParams();
  const [coinData, setCoinData] = useState([]);
  const [coinVolume, setCoinVolume] = useState([]);
  const [day, setDay] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

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

      setCoinData(coinChart);
      setCoinVolume(coinInfo);
      setIsLoading(false);
    };
    fetchChartData();
  }, [day]);

  const handleDay = (value) => {
    setDay(value);
  };

  const renderData = () => {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    return (
      <div className="coinlist">
        <Chart day={day} coinData={coinData} handleDay={handleDay} />
        <CoinData />
      </div>
    );
  };

  return renderData();
};

export default CoinDetail;
