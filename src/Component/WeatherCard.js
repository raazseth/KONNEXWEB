import React from "react";

const WeatherCard = ({ weather }) => {
  function fahrenheitToCelsius(fahrenheit) {
    return parseInt((fahrenheit - 32) * (5 / 9));
  }
  return (
    <div
      style={{
        backgroundColor: "transparent",
        padding: "12px",
        height: "auto",
        width: "200px",
        marginRight: "auto",
        borderRadius: "12px",
        backdropFilter: "blur(12px)",
        display: "flex",
        flexDirection: "column",
        color: "#fff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          fontSize: "52px",
          fontWeight: "bold",
          marginBottom: "4px",
        }}
      >
        {fahrenheitToCelsius(weather?.currentConditions?.temp)}°C
      </h1>
      <h4
        style={{
          fontWeight: "normal",
          fontSize: "14px",
        }}
      >
        {weather?.currentConditions?.conditions}
      </h4>
    </div>
  );
};

export default WeatherCard;
