"use client";
import { useState, useEffect } from "react";

export const Weather = () => {
  const [temperature, setTemperature] = useState(null);
  const [count,setCount] = useState(2);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=35.7123&longitude=139.7931&current=temperature_2m&hourly=temperature_2m&timezone=Asia%2FTokyo&forecast_days=1"
        );

        const data = await response.json();
        const currentTemperature = data.current.temperature_2m;

        setTemperature(currentTemperature);
        setCount((n) => n+1);
      } catch (error) {
        console.error("データの取得に失敗しました");
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      {count}
      <h1>今日の天気</h1>
      {temperature !== null ? (
        <p>現在の温度: {temperature}°C</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
